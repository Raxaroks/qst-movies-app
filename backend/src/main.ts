import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig, globalOptions } from './config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes( new ValidationPipe(globalOptions) );

  await app.listen( AppConfig().port );
  logger.log(`App running and listening on port ${AppConfig().port}`);
}
bootstrap();
