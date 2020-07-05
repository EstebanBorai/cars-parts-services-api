import got from 'got';
import { BovsoftResponse, Func, Credentials, RequestOptions, Format } from '../typings/index';

export class Request {
  private baseapi: string;
  private creds: Credentials;
  private requestOptions: RequestOptions;

  constructor(baseapi: string, creds: Credentials, requestOptions: RequestOptions) {
    this.baseapi = baseapi;
    this.creds = creds;
    this.requestOptions = requestOptions;
  }

  public static makeURL(baseapi: string, func: Func, requestOptions: RequestOptions, creds: Credentials): string {
    return `${baseapi}/${func}?format=${requestOptions.format}&lang=${requestOptions.lang}&email=${creds.email}&seccode=${creds.seccode}`;
  }

  public static parseParams<P>(params?: P): string {
    if (params) {
      return Object.keys(params).map((p: string) => `${p}=${params[p]}`).join('&');
    }

    return '';
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

    let { statusCode, body } = await got.get<BovsoftResponse<T>>(baseURL);

    if (this.requestOptions.format === Format.JSON) {
      // parse JSON if the configuration is using Format.JSON
      body = JSON.parse(body as unknown as string);
    }

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

    if (statusCode !== 200) {
      // TODO: Improve this error
      throw new Error();
    }

    return body;
  }
}
