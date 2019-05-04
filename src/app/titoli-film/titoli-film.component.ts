import { Component, OnInit, Input } from '@angular/core';
import { Person } from "../person";
import { Starship } from "../starship";
import { Vehicle } from "../vehicle";
import { Planet } from '../planet';
import { Species } from '../species';
import { InfoFilm } from '../info-film';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-titoli-film',
  templateUrl: './titoli-film.component.html',
  styleUrls: ['./titoli-film.component.css']
})
export class TitoliFilmComponent implements OnInit {

  

  filmScelto: Film;
  filmoneScelto:Film;

  contenitoreFilms: Film[];


  contenitorePeople: Person[];
  contenitoreVehicles: Vehicle[];
  contenitoreStarship: Starship[];
  contenitorePlanets: Planet[];
  contenitoreSpecies: Species[];
  contenitoreInfoFilm: InfoFilm[];

  

  constructor(private servizio: FilmService) { };

  ngOnInit() {
    this.elencoFilm();
  }

  elencoFilm() {
    this.servizio.call().subscribe(z => { this.contenitoreFilms = z.results; console.log(this.contenitoreFilms) })
  }

  infoFilm(index) {
    this.filmScelto = this.contenitoreFilms[index];
  }

  filmSalvato(filmScelto){
   var filmoneScelto = this.servizio.saveFilm(filmScelto);
   return filmoneScelto;
  }

}
