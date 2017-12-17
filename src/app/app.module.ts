import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import {FormsModule} from '@angular/forms';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistService } from './artist.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ ArtistService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
