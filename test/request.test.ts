import { Request, Func, Format, Lang } from '../src/index';

describe('webservice request', () => {
  const endpoint = 'http://webservice/';

  const creds = {
    email: 'mail@service.com',
    seccode: 'abc'
  };

  const options = {
    format: Format.JSON,
    lang: Lang.English,
  };

  const makeRequestFor = (func: Func): Request => {
    const request = new Request(endpoint, creds, options);

    return request;
  };

  it('creates an instance of Request', () => {
    expect(() => makeRequestFor(Func.GetAdditionalInfoAplicability)).not.toThrow();
  });
});
