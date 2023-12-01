import { ValidationPipeOptions } from '@nestjs/common';

export const AppConfig = () => ({
  environment: process.env.NODE_ENV || 'dev',
  port: process.env.PORT,
  mongodb: {
    name: process.env.MONGODB_NAME,
    hostUrl: process.env.MONGODB_HOST_URL,
  }
});

export const globalOptions: ValidationPipeOptions = {
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
  transformOptions: { enableImplicitConversion: true }
};
