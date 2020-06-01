export interface GetArtidByReferenceResponse {
  artid: string;
  braid: string;
  brand: string;
  searchnr: string;
  name: string;
}

export interface GetArtidByReferenceParams {
  search: string;
  braid: string;
  brandid: string;
}
