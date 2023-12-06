import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
  @Input() movie: Movie | undefined;

  get detailsLink(): string {
    const { _id } = this.movie!;
    return `details/${ _id }`;
  }
}
