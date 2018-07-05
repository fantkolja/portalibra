import { RequestHandler } from 'express';

export interface HttpServer {
  get(url: string, requestHandler: RequestHandler): void;
}

