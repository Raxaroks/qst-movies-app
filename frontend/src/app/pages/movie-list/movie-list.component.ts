import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectOption } from 'src/app/common/interfaces/select-option.interface';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  loading: boolean = true;
  movies: Movie[] = [];

  orders: SelectOption[] = [
    {
      key: 'asc',
      value: 'ascending'
    },
    {
      key: 'desc',
      value: 'descending'
    },
  ];

  form: FormGroup = new FormGroup({
    order: new FormControl(this.orders[0].key),
  });

  get order(): FormControl {
    return this.form.get('order') as FormControl
  }

  constructor(
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.loadMovies();    
  }

  loadMovies() {
    this.movieService.findAll()
      .subscribe({
        next: (movies) => this.movies = movies,
        error: (err) => {
          console.warn(err);
        },
        complete: () => {
          this.loading = false;
        }
      });
  }

  sortBy(key: string, mode: 'asc' | 'desc') {
    this.loading = true;
    setTimeout( () => {
      let sorted: Movie[] = [];

      // sorting strings
      if (key === 'title') {
        sorted = [...this.movies].sort( (a, b) => {
          const x = a.title.toLowerCase()
          const y = b.title.toLowerCase()
  
          if (mode === 'asc') {
            if (x>y) return 1;
            if (x<y) return -1;
          }
  
          else {
            if (x<y) return 1;
            if (x>y) return -1;
          }
          
          return 0;
        } )
      }
  
      // sorting dates
      if (key === 'releaseDate') {
        if (mode === 'asc') {
          sorted = [...this.movies].sort( (a, b) => Number(a.releaseDate) - Number(b.releaseDate) )
        }
        else {
          sorted = [...this.movies].sort( (a, b) => Number(b.releaseDate) - Number(a.releaseDate) )
        }      
      }
  
      this.loading = false;
      this.movies = sorted;
    }, 1000 )

    
  }
}
