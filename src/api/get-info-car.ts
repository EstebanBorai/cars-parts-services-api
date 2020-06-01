export interface GetInfoCarResponse {
  mfaid: string;
  modid: string;
  typid: string;
  brand: string;
  modelcar: string;
  typecar: string;
  pconstart: string;
  pconend: string;
  bodytype: string;
  kw: string;
  hp: string;
  ccm: string;
  cylinders: string;
  doors: string;
  tank: string;
  voltage: string;
  typeabs: string;
  typeasr: string;
  typeengine: string;
  listcodeengine: string;
  braketype: string;
  brakesystem: string;
  typefuel: string;
  typecatalyst: string;
  maxweight: string;
  typeaxle: string;
  ccmtax: string;
  litres: string;
  valves: string;
  typedrive: string;
  typetrans: string;
  fuelsuply: string;
}

export interface GetInfoCarParams {
  typid: string;
}
