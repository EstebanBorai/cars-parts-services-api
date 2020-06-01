export interface GetManufacturersResponse {
  mfaid: string;
  brand: string;
  mfccode: string;
  mfnr: string;
  includedtype: string;
}

export enum Only {
  Passanger = 1,
  Truck = 2,
  Motorcycles = 3
}

export interface GetManufacturersParams {
  only?: Only;
  year?: number;
}
