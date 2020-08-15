import ky from 'ky-universal';

import { BovsoftResponse, Func, Credentials, RequestOptions } from '../typings/index';

export class Request {
  private baseapi: string;
  private creds: Credentials;
  private requestOptions: RequestOptions;

  constructor(baseapi: string, creds: Credentials, requestOptions: RequestOptions) {
    this.baseapi = baseapi;
    this.creds = creds;
    this.requestOptions = requestOptions;
  }

  public static makeWithNoCredentials(baseapi: string, requestOptions: RequestOptions) {
    return new Request(baseapi, {
      email: '',
      seccode: ''
    }, {
      ...requestOptions,
      noCredentials: true
    });
  }

  public static makeURL(baseapi: string, func: Func, requestOptions: RequestOptions, creds: Credentials): string {
    const base = `${baseapi}/${func}?format=${requestOptions.format}&lang=${requestOptions.lang}`;

    if (requestOptions.noCredentials) {
      return base;
    }

    return base.concat(`&email=${creds.email}&seccode=${creds.seccode}`);
  }

  public static parseParams<P>(params?: P): string {
    if (params) {
      return Object.keys(params).map((p: string) => `${p}=${params[p]}`).join('&');
    }

    return '';
  }

  private async fromResult<T>(response: Response): Promise<BovsoftResponse<T>> {
    if (response.body) {
      const readResult = await response.body.getReader().read();

      if (readResult.value) {
        const json = new TextDecoder('utf-8').decode(readResult.value);

        return JSON.parse(json) as BovsoftResponse<T>;
      }
    }

    throw new Error(`The response object doesn't include body`);
  }

  public async get<T = any, P = any>(func: Func, params?: P): Promise<BovsoftResponse<T>> {
    const madeParams = Request.parseParams(params);
    
    let baseURL = Request.makeURL(this.baseapi, func, this.requestOptions, this.creds);

    if (madeParams) {
      baseURL = `${baseURL}&${madeParams}`;
    }

    if (this.requestOptions.isDebugging) {
      console.log(`GET -> ${baseURL}`); // eslint-disable-line
    }

    const response = await await ky.get(baseURL);
    const status = response.status;
    const body = await this.fromResult<T>(response);

    if (body?.empty) {
      // the API returns "true"/"false" instead of a boolean
      // then evaluate the value comming from the API in order
      // to normalize values
      if (body.empty as unknown as string === 'false') {
        body.empty = false;
      } else {
        body.empty = true;
      }
    }

    if (status !== 200) {
      throw new Error(`An error occurred fetching CPS API`);
    }

    return body;
  }
}
