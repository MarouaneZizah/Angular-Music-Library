import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import {FormsModule} from '@angular/forms';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistService } from './artist.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule }    from '@angular/common/http';
import { AlbumsComponent } from './albums/albums.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongsComponent } from './songs/songs.component';
import { SongService } from './song.service';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistDetailComponent,
    MessagesComponent,
    HomePageComponent,
    AlbumsComponent,
    PlaylistComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

  ],
  providers: [ ArtistService, SongService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
