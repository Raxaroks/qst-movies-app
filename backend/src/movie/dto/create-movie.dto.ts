import { IsArray, IsDate, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @MinLength(3)
  title: string;
  
  @IsString()
  @MinLength(20)
  description: string;
  
  @IsNumber()
  rating: number;
  
  @IsNumber()
  duration: number;
  
  @IsString({ each: true })
  @IsArray()
  genre: string[];
  
  @IsDate()
  releaseDate: Date;
  
  @IsString()
  trailer: string;
  
  @IsString()
  imgUrl: string;
}
