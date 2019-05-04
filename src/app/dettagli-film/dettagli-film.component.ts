import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../film';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { Vehicle } from '../vehicle';
import { Starship } from '../starship';
import { Species } from '../species';
import { InfoFilm } from '../info-film';
import { Planet } from '../planet';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-dettagli-film',
  templateUrl: './dettagli-film.component.html',
  styleUrls: ['./dettagli-film.component.css']
})
export class DettagliFilmComponent implements OnInit {
  filmScelto: Film;
  filmUltimo: Film;

  contenitoreFilms: Film[];


  contenitorePeople: Person[];
  contenitoreVehicles: Vehicle[];
  contenitoreStarship: Starship[];
  contenitorePlanets: Planet[];
  contenitoreSpecies: Species[];
  contenitoreInfoFilm: InfoFilm[];


  constructor(private servizio: FilmService) { };

  ngOnInit() {
    this.recuperaFilm();
  }

  recuperaFilm(){
    this.filmUltimo = this.servizio.getFilmoneScelto();
    return this.filmUltimo;
  }



  
 
}
