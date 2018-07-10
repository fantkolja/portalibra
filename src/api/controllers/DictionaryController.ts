import { Controller } from './controller.model';
import { Application } from 'express';

// @Controller('/dictionaries') -> adds constructor, with this.router, and this.app
export class DictionaryController implements Controller {
  constructor(app: Application) {
    app.use('/dictionaries', this.getAll);
  }
  // @Get('/') -> this.router.get()
  public getAll(url: string): number[] {
    return [1, 2, 3];
  }
}
