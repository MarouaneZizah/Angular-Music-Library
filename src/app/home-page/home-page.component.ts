import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { Song } from '../song';
import { ArtistService } from '../artist.service';
import { SongService } from '../song.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  artists: Artist[] = [];

  songs: Song[] = [];

  constructor(private artistService: ArtistService, private songService: SongService) { }

  ngOnInit() {
	this.getArtists();
	this.getSongs();
  }

  getArtists(): void {
    this.artistService.getArtists().subscribe( artists => this.artists = artists.slice(1, 7) );
  }

  getSongs(): void {
    this.songService.getSongs().subscribe( songs => this.songs = songs.slice(0, 7) );
  }

}
