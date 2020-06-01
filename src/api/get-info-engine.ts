export interface GetInfoEngineResponse {
  engid: string;
  mfaid: string;
  code: string;
  pconstart: string;
  pconend: string;
  kwfrom: string;
  kwupto: string;
  hpfrom: string;
  hpupto: string;
  valves: string;
  cylinders: string;
  ccmfrom: string;
  ccmupto: string;
  design: string;
  fueltype: string;
  fuelsuply: string;
  description: string;
  typeengine: string;
  kwrpmfrom: string;
  kwrpmupto: string;
  torquefrom: string;
  torqueupto: string;
  torquerpmfrom: string;
  torquerpmend: string;
  compressionfrom: string;
  compressionupto: string;
  drilling: string;
  extension: string;
  crankshaft: string;
  chargetype: string;
  gasnormtype: string;
  cylinderstype: string;
  control: string;
  valvecontrol: string;
  cooling: string;
}

export interface GetInfoEngineParams {
  engid: number;
}
