export interface GetSearchByCrossrefResponse {
  artid: string;
  braid: string;
  brand: string;
  searchnr: string;
  name: string;
}

export interface GetSearchByCrossrefParams {
  search: string;
}
