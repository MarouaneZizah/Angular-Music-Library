import { Injectable } from '@angular/core';
import { Artist } from './artist';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ArtistService {

  constructor( private http: HttpClient, private messageService: MessageService) { }

  /** Log a ArtistService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ArtistService : ' + message);
  }

  private artistsUrl = 'api/artists';  // URL to web api

  getArtists (): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistsUrl)
    .pipe(
      tap(Artists => this.log(`fetched Artists`)),
      catchError(this.handleError('getArtists', []))
    );
  }

  getArtist(id: number): Observable<Artist>
  {
    const url = `${this.artistsUrl}/${id}`;

    return this.http.get<Artist>(url).pipe(
      tap(_ => this.log(`fetched Artist id=${id}`)),
      catchError(this.handleError<Artist>(`getArtist id=${id}`))
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

  /* PUT : update the artist on the serve */
  updateArtist (artist: Artist): Observable<any> {
    return this.http.put(this.artistsUrl, artist, httpOptions).pipe(
      tap(_ => this.log(`updated Artist id=${artist.id}`)),
      catchError(this.handleError<any>('updateArtist'))
    );
  }

  /** POST: add a new artist to the server */
  addArtist (artist: Artist): Observable<Artist>
  {
    return this.http.post<Artist>(this.artistsUrl, artist, httpOptions).pipe(
      tap((artist: Artist) => this.log(`added Artist w/ id=${artist.id}`)),
      catchError(this.handleError<Artist>('addArtist'))
    );
  }

  /** DELETE: delete the artist from the server */
  deleteArtist (artist: Artist | number): Observable<Artist>
  {
    const id = typeof artist === 'number' ? artist : artist.id;
    const url = `${this.artistsUrl}/${id}`;

    return this.http.delete<Artist>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted artist id=${id}`)),
      catchError(this.handleError<Artist>('deleteArtist'))
    );
  }

}
