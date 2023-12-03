import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto, UpdateMovieDto } from './dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  create( @Body() createMovieDto: CreateMovieDto ) {
    return this.movieService.create(createMovieDto);
  }

  @Get()
  findAll( @Query() query: PaginationDto ) {
    return this.movieService.findAll(query);
  }

  @Get(':key') // could be id or title
  findOne( @Param('key') key: string ) {
    return this.movieService.findOne(key);
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    return this.movieService.update(id, updateMovieDto)
  }

  @Delete(':id')
  remove( @Param('id', ParseMongoIdPipe) id: string ) {
    return this.movieService.remove(id);
  }

}
