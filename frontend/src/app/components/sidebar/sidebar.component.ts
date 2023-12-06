import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() items: Movie[];

  constructor(
    private watchlistService: WatchlistService
  ) {
    this.items = [];
  }

  ngOnInit() {
    this.items = this.watchlistService.load();    
  }

  buildLink(id: string): string {
    return `movies/details/${id}`;
  }

  buildTitle({ title, releaseDate }: Movie) {
    const year = new Date(releaseDate).getFullYear()
    return `${title} (${year})`
  }
}
