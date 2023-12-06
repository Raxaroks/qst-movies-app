import { Component, OnInit } from '@angular/core';
import { WatchlistService } from "../services/watchlist.service";
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  watchlist: Movie[] = []
  constructor(
    private watchlistService: WatchlistService
  ) {}

  ngOnInit(): void {
    this.watchlistService.eventListener.subscribe( (movies) => {
      // console.log(movies);
      this.watchlist = movies;
    } )
  }
}
