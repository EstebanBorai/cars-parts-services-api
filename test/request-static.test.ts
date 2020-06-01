import { Request, Func, Format, Lang, RequestOptions, Credentials, GetAdditionalInfoAplicabilityParams, GetAdditionalInfoArticleParams, GetArticlesForMimeParams, GetArtidByReferenceParams } from '../src/index';

test('make url', () => {
  const have = Request.makeURL('http://webservice', Func.GetAdditionalInfoAplicability, {
    format: Format.JSON,
    lang: Lang.English,
  }, {
    email: 'mail@service.com',
    seccode: 'abc'
  });

  const want = "http://webservice/getAdditionalInfoAplicability?format=JSON&lang=en&email=mail@service.com&seccode=abc";

  expect(have).toBe(want);
});


test('parse params', () => {
  const have = Request.parseParams<GetArtidByReferenceParams>({
    braid: '1234',
    brandid: '1344',
    search: 'QWERTY'
  });

  const want = "braid=1234&brandid=1344&search=QWERTY";

  expect(have).toBe(want);
});
