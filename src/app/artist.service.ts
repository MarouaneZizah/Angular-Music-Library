import { Injectable } from '@angular/core';
import { Artist } from './artist';
import { Artists } from './mock-artist';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class ArtistService {

  constructor(private messageService: MessageService) { }

  getArtists(): Observable<Artist[]>
  {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('ArtistService: fetched Artists');
    return of(Artists);
  }
}
