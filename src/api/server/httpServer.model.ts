import { RequestHandler, Router } from 'express';

export interface HttpServer {
  get(url: string, requestHandler: RequestHandler): void;
  addRouter(url: string, router: Router): void;
  // addErrorHandler -> should be after other middleware
  // let's do inner checks for that
  // e.g. app.use(logErrors)
  // app.use(clientErrorHandler)
  // app.use(errorHandler)
  // catch-all handler, the last one
  //   function errorHandler (err, req, res, next) {
  //    res.status(500)
  //    res.render('error', { error: err })
  //   }
}
