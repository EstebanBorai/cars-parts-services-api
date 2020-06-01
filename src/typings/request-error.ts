export interface RequestError extends Error {
  statusCode: number;
  statusText: string;
  body: any;
}
