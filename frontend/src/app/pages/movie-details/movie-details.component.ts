import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from "../../services/movies.service";
import { formatDate } from 'src/app/common/helpers/date.helper';
import { map, switchMap } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { convertToEmbeddedUrl, removeChannelParamFromUrl } from 'src/app/common/helpers/string.helper';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;
  loading = false;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private moviesService: MoviesService,
  ) {}

  get dateFormatted() {
    return formatDate(this.movie!.releaseDate);
  }

  get durationStr() {
    return `${ this.movie?.duration } mins`
  }

  get sanitizedUrl() {
    let url = this.movie!.trailer;
    if (url.includes('&ab_channel')) url = removeChannelParamFromUrl(url);
    const embeddedUrl = convertToEmbeddedUrl(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl( embeddedUrl );
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap( params => {
        const id = params.get('id') || '';
        return this.moviesService.findOne(id);
      } )
    ).subscribe({
      next: (movie) => this.movie = movie,
      error: (err) => {
        console.warn(err)
      },
      complete: () => console.log(this.movie),
    })
  }
}
