import * as express from 'express';
import { HttpServer } from './httpServer.model';
import { Server } from 'http';

export class ApiServer implements HttpServer {
  private app: express.Application;

  constructor(private port: number) {
    this.app = express();
  }

  public get(url: string, requestHandler: express.RequestHandler): void {
    this.app.get(url, requestHandler);
  }

  public addRouter(url: string, router: express.Router): void {
    this.app.use(url, router);
  }

  public start(): Server {
    return this.app.listen(this.port, () => console.log(`API server is listening on ${this.port} port`));
  }
}
