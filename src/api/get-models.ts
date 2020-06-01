import { Only } from './get-manufacturers';

export interface GetModelsResponse {
  mfaid: string;
  modid: string;
  brand: string;
  modelcar: string;
  pconstart: string;
  pconend: string;
  includedtype: string;
}

export interface GetModelsParams {
  only: Only;
  year: number;
  mfaid: string;
}
