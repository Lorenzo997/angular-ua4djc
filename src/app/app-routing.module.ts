import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettagliFilmComponent } from './dettagli-film/dettagli-film.component';
import { TitoliFilmComponent } from './titoli-film/titoli-film.component';

const routes: Routes = [
  { path: '', redirectTo: '/titoli-film', pathMatch: 'full' },
{ path: 'titoli-film', component: TitoliFilmComponent },
{ path: 'dettagli-film', component: DettagliFilmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
