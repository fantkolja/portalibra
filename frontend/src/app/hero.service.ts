import { Injectable } from '@angular/core';
import { Hero } from '../../../common/models/hero';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { ApiResponseBase } from '../../../common/models/api-response';

interface RxErrorHandler<T> {
  (error: any): Observable<T>;
}

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.API_URL}/heroes`;

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  public getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.log('HeroService: fetched heroes');
    return this.http.get<ApiResponseBase>(this.heroesUrl)
      .pipe(
        tap(response => this.log('heroes fetched')),
        map(response => response.heroes),
        catchError(this.handleError<Hero[]>('getHeroes', []))
        );
  }

  public getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    // TODO: send the message _after_ fetching the hero
    return this.http.get<ApiResponseBase>(url)
      .pipe(
        tap(response => this.log(`HeroService: fetched hero id=${id}`)),
        map(response => response.hero),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  private log(msg: string): void {
    this.messageService.add(msg);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation: string = 'operation', result?: T): RxErrorHandler<T> {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.warn(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }
}
