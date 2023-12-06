import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfig, JoiValidationSchema } from './config';
import { AppController } from './app.controller';
import { MovieModule } from './movie/movie.module';
import { CommonModule } from './common/common.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SeedModule } from './seed/seed.module';
@Module({
  imports: [
    ConfigModule.forRoot({ load: [AppConfig], validationSchema: JoiValidationSchema }),
    MongooseModule.forRoot(
      AppConfig().mongodb.hostUrl,
      { dbName: AppConfig().mongodb.name }
    ),
    ServeStaticModule.forRoot({
      rootPath: ( AppConfig().environment === 'dev' ) 
                  ? join(__dirname, '..', 'public') 
                  : join(__dirname, '.', 'public')
    }),
    MovieModule,
    CommonModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
