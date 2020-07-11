export interface GetCrossReferencesForArticleResponse {
  braid: string;
  brand: string;
  searchnr: string;
  displaynr: string;
  name: string;
  kind: ProductKind;
}

export enum ProductKind {
  ProductForWhichIsSeach = 1,
  TradeNumber = 2,
  Original = 3,
  BarCodeEAN = 5
}

export interface GetCrossReferencesForArticleParams {
  artid: string;
}