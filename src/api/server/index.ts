import * as express from 'express';
import { HttpServer} from './httpServer.model';

export class ApiServer implements HttpServer {
  private app: express.Application;

  constructor(private port: number) {
    this.app = express();
  }

  public get(url: string, requestHandler: express.RequestHandler): void {
    console.log(url);
  }

  public start(): void {
    this.app.listen(this.port, () => console.log(`API server is listening on ${this.port} port`));

  }
}
