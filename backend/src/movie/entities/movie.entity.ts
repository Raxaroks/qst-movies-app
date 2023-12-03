import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Movie extends Document {
  @Prop({ index: true, required: true })
  title: string;
 
  @Prop({ required: true })
  description: string;

  @Prop({ default: 0 })
  rating: number;

  @Prop({ required: true }) // in minutes
  duration: number;

  @Prop([String])
  genre: string[];

  @Prop()
  releaseDate: Date;

  @Prop()
  trailer: string;

  @Prop()
  imgUrl: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
