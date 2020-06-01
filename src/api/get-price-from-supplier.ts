export interface GetPriceFromSupplierResponse {
  artid: string;
  braid: string;
  brand: string;
  articlenr: string;
  name: string;
  price: string;
  currencycode: string;
}

export interface GetPriceFromSupplierParams {
  artid: string;
}
