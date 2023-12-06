import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from 'src/movie/entities/movie.entity';
import { Model } from 'mongoose';
import { mockedMovies } from './mocks/movie.mock';
import { MovieService } from 'src/movie/movie.service';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Movie.name)
    private readonly movieModel: Model<Movie>,
    private movieService: MovieService,
  ) {}

  async execute() {
    const promises = mockedMovies.map( dto => this.movieService.create(dto) );
    await Promise.all(promises);
    return 'SEED EXECUTED!!!';
  }

  async nuke() {
    await this.movieModel.deleteMany({});
  }
}
