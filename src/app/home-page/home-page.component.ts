import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  artists: Artist[] = [];

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.getArtists();
  }

  getArtists(): void {
    this.artistService.getArtists().subscribe( artists => this.artists = artists.slice(1, 5) );
  }

}
