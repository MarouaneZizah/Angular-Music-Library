import { Component, OnInit } from '@angular/core';
import {Artist} from '../artist';
import {ArtistService} from '../artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})

export class ArtistsComponent implements OnInit {

  artists: Artist[];

  selectedArtist: Artist;

  constructor( private artistService: ArtistService ) { }

  ngOnInit() {
    this.getArtists();
  }

  onSelect(artist: Artist): void
  {
    this.selectedArtist = artist;
  }

  getArtists(): void {
    this.artistService.getArtists().subscribe( artists => this.artists = artists );
  }

}
