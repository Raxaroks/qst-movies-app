import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-watchlist-btn',
  templateUrl: './watchlist-btn.component.html',
  styleUrls: ['./watchlist-btn.component.scss']
})
export class WatchlistBtnComponent implements OnInit {
  @Input() id: string = '';
  added: boolean = false;
  

  get label(): string {
    return (this.added) ? 'on my watchlist' : 'add to watchlist';
  }

  constructor(
    private watchlistService: WatchlistService,
    private moviesService: MoviesService
  ) { } 

  ngOnInit() {
    const list = this.watchlistService.load();
    const found = list.find( movie => movie._id === this.id );
    if (found) this.added = true;
  }

  execute() {
    if (!this.added) {
      this.moviesService.findOne(this.id)
                        .subscribe({
                          next: (movie) => this.watchlistService.save(movie),
                          error: (err) => console.warn(err),
                          complete: () => {
                            this.added = true
                            this.updateSidebar();
                          }
                        })
    } else {
      this.watchlistService.remove(this.id);
      this.added = false;
      this.updateSidebar();
    }
  }

  updateSidebar() {
    const movies = this.watchlistService.load();
    this.watchlistService.emitEvent(movies);
  }
}
