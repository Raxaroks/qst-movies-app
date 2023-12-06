import { EventEmitter, Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private updatedWatchlistEvent = new EventEmitter<Movie[]>();
  emitEvent(movies: Movie[]) {
    this.updatedWatchlistEvent.next(movies);
  }

  get eventListener() {
    return this.updatedWatchlistEvent.asObservable();
  }

  constructor() { }

  load(): Movie[] {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]')
    return watchlist;
  }

  save(movie: Movie) {
    const watchlist = this.load();
    watchlist.push(movie);
    const stringified = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', stringified);
  }

  remove(id: string) {
    const watchlist = this.load();  
    const filtered = watchlist.filter( movie => movie._id !== id );
    const stringified = JSON.stringify(filtered);
    localStorage.setItem('watchlist', stringified);
  }
}
