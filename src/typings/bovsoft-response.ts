import { BovsoftResponseData } from "./bovsoft-response-data";

export interface BovsoftResponse<T> {
  // Empty comes as a string from the webservice
  empty: boolean;
  statusText: string;
  Data: BovsoftResponseData<T>;
}
