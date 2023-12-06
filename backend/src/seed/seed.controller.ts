import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  populateMovieDB() {
    return this.seedService.execute();
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete()
  destroyDB() {
    return this.seedService.nuke();
  }
}
