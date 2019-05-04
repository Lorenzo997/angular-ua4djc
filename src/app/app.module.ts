import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FilmService } from './film.service';
import { TitoliFilmComponent } from './titoli-film/titoli-film.component';
import { DettagliFilmComponent } from './dettagli-film/dettagli-film.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, TitoliFilmComponent, DettagliFilmComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FilmService]
})
export class AppModule { }
