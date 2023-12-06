import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MovieModule } from 'src/movie/movie.module';
import { MovieService } from 'src/movie/movie.service';

@Module({
  controllers: [SeedController],
  providers: [SeedService, MovieService],
  imports: [MovieModule],
})
export class SeedModule {}
