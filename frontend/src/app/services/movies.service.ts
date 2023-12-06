import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie.interface';
import { delay, map } from 'rxjs';


interface GetMoviesResponse {
  total: number;
  page: number;
  movies: Movie[]
}


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl: string = `${ environment.apiUrls.movies }/movie`;

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<GetMoviesResponse>(this.baseUrl)
                    .pipe( 
                      delay(1000),
                      map( (resp) => resp.movies.map( movie => ({...movie, releaseDate: new Date(movie.releaseDate)}) ) ) 
                    );
  }

  findOne(id: string) {
    const url = `${ this.baseUrl }/${ id }`;
    return this.http.get<Movie>(url);
  }
}
