import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from './film';
import { HttpClient } from '@angular/common/http';
import { InfoFilm } from './info-film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {


  filmoneScelto: Film;
  constructor(private http: HttpClient) { }


  call() {
    let ox: Observable<Film[]> =
      this.http.get<Film[]>("https://swapi.co/api/films/");
    return ox;
  }



  saveFilm(filmScelto) {
     this.filmoneScelto = filmScelto;
     console.log("CONTENITORE FILMONE SCELTO: " && this.filmoneScelto)
     return this.filmoneScelto;
  }

  getFilmoneScelto(){
    return this.filmoneScelto;
  }

}
