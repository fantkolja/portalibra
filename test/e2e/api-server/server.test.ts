import * as request from 'supertest';

import { ApiServer } from '../../../src/api/server';
import { Server } from 'http';

describe('API Server', () => {
  let port: number;
  let server: Server;

  beforeAll(() => {
    // TODO: load with dotenv
    // port = Number(process.env.API_TEST_PORT);
    port = Number(5001);
    const api = new ApiServer(port);
    api.get('/', (req, res) => {
      res.status(404).json({
        message: 'API is ALIVE',
      });
    });
    server = api.start();
  });

  afterAll(() => server.close());

  describe('#after init', () => {
    test(`should be running on url from environment`, async () => {
      return await request(`${'http://localhost'}:${port}`)
        .get('/')
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => expect(response).toBeTruthy());
    });
  });
});
