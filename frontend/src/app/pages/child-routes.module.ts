import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

const childRoutes: Routes = [
  { 
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MovieListComponent,
    title: `Movie List`
  },
  {
    path: 'movies/details/:id',
    component: MovieDetailsComponent,
    title: `Movie Details`
  },
  {
    path: '**',
    redirectTo: 'movies'
  }
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesModule {}
