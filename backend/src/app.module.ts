import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfig, JoiValidationSchema } from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { CommonModule } from './common/common.module';
@Module({
  imports: [
    ConfigModule.forRoot({ load: [AppConfig], validationSchema: JoiValidationSchema }),
    MongooseModule.forRoot(
      AppConfig().mongodb.hostUrl,
      { dbName: AppConfig().mongodb.name }
    ),
    MovieModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
