import { BadRequestException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './entities/movie.entity';
import { Model, isValidObjectId } from 'mongoose';
import { CreateMovieDto } from './dto';
import { CrUpMovieResponse } from './interfaces/create-movie-response.interface';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { UpdateMovieDto } from "./dto/update-movie.dto";

@Injectable()
export class MovieService {

  constructor(
    @InjectModel(Movie.name)
    private readonly movieModel: Model<Movie>
  ) {}

  private handleExceptions(error: any) {
    console.warn(error);
    throw new InternalServerErrorException('Unexpected error, please check the logs...');
  }

  async create(createMovieDto: CreateMovieDto): Promise<CrUpMovieResponse> {
    try {
      createMovieDto.genre = createMovieDto.genre.map( gnr => gnr.toLowerCase() );
      const movie: Movie = await this.movieModel.create({ ...createMovieDto });
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Movie successfully created',
        movie
      };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findOne(key: string): Promise<Movie> {
    let movie: Movie;
    if (isValidObjectId(key)) movie = await this.movieModel.findById(key);
    if (!movie) movie = await this.movieModel.findOne({ title: key });
    if (!movie) throw new NotFoundException(`No movie found with the given title or mongoId: [${ key }]`);
    return movie;
  }

  async findAll({ limit = 10, page = 1 }: PaginationDto) {
    const count = await this.movieModel.countDocuments();
    const movies: Movie[] = await this.movieModel.find()
                                                  .limit(limit*1)
                                                  .skip((page-1)*limit)
                                                  .sort({ title: 1 })
                                                  .select("-__v")
                                                  .exec();
    return {
      total: count,
      page,
      movies
    }
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<CrUpMovieResponse> {
    const movie = await this.findOne(id);
    try {
      if (updateMovieDto.genre) updateMovieDto.genre = updateMovieDto.genre.map( gnr => gnr.toLowerCase() )
      const updated: Movie = await movie.updateOne(updateMovieDto);
      return {
        statusCode: HttpStatus.ACCEPTED,
        message: 'Movie successfully updated',
        movie: { ...movie.toJSON(), ...updateMovieDto }
      }
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string): Promise<void> {
    const { deletedCount } = await this.movieModel.deleteOne({ _id: id });
    if (deletedCount === 0) throw new BadRequestException(`No movie found with the given mongoId: [${id}]`);
    return;
  }

}
