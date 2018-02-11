import { Injectable } from '@angular/core';
import { Song } from './song';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class SongService {

  constructor( private http: HttpClient, private messageService: MessageService) {}

  private log(message: string) {
    this.messageService.add('SongService : ' + message);
  }

  private songsUrl = 'api/songs';

  getSongs (): Observable<Song[]> {
    return this.http.get<Song[]>(this.songsUrl)
    .pipe(
      tap(Songs => this.log(`fetched Songs`)),
      catchError(this.handleError('getSongs', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
