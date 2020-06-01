import { Client, Format, Lang } from '../src/index';
import dotenv from 'dotenv';

describe('webservice client', () => {
  let webservice = '';
  let email = '';
  let seccode = '';
  let client: any;

  beforeAll(() => {
    dotenv.config();
    const { WEBSERVICE_URL, EMAIL, SECCODE } = process.env;

    webservice = WEBSERVICE_URL as string;
    email = EMAIL as string;
    seccode = SECCODE as string;
  });

  beforeEach(() => {
    client = new Client(webservice, {
      email,
      seccode
    }, {
      format: Format.JSON,
      lang: Lang.English,
      isDebugging: true
    });
  });

  it('requests', async () => {
    expect.assertions(1);

    const response = await client.getAdditionalInfoAplicability({
      laid: 1453322
    });

    expect(response.data.infotext).not.toBe(undefined);
  });
});
