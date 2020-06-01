import { IRequestError } from "../typings/index";

export class RequestError implements IRequestError {
  public statusCode: number;
  public statusText: string;
  public body: any;
  public message: string;
  public name: string;
  public stack?: string;

  constructor(
    statusCode: number,
    statusText: string,
    body?: unknown
  ) {
    this.message = statusText;
    this.name = "BovsoftWebServiceRequestError";
    this.stack = (body as string);
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.body = body;
  }
}
