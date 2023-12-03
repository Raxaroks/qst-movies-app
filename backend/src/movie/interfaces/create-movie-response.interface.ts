import { HttpResponse } from 'src/common/interfaces/http-response.interface';
import { Movie } from '../entities/movie.entity';

export interface CrUpMovieResponse extends HttpResponse {
  movie: Movie
}
