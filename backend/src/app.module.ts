import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfig, JoiValidationSchema } from './config';
import { AppController } from './app.controller';
import { MovieModule } from './movie/movie.module';
import { CommonModule } from './common/common.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    ConfigModule.forRoot({ load: [AppConfig], validationSchema: JoiValidationSchema }),
    MongooseModule.forRoot(
      AppConfig().mongodb.hostUrl,
      { dbName: AppConfig().mongodb.name }
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    MovieModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
