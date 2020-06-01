export interface GetCrossReferencesForArticleResponse {
  criteria_text: string;
  criteria_value: string;
}

export enum ProductKind {
  ProductForWhichIsSeach = 1,
  TradeNumber = 2,
  Original = 3,
  BarCodeEAN = 5
}

export interface GetCrossReferencesForArticleParams {
  braid: string;
  brand: string;
  searchnr: string;
  displaynr: string;
  name: string;
  kind: ProductKind;
}
