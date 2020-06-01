export interface GetSearchByCrossrefAndBrandResponse {
  artid: string;
  braid: string;
  brand: string;
  searchnr: string;
  name: string;
}

export interface GetSearchByCrossrefAndBrandParams {
  search: string;
  braid: string;
}
