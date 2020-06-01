import { Only } from './get-manufacturers';

export interface GetTypesResponse {
  mfaid: string;
  modid: string;
  typid: string;
  brand: string;
  modelcar: string;
  shortnametypecar: string;
  fullnametypecar: string;
  pconstart: string;
  pconend: string;
  bodytype: string;
  kw: string;
  hp: string;
  ccm: string;
  typefuel: string;
  listcodeengine: string;
  includedtype: string;
}

export interface GetTypesParams {
  only: Only;
  modid: string;
  year: number;
}
