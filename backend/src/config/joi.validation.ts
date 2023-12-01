import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  NODE_ENV: Joi.required(),
  PORT: Joi.number().default(3000),
  MONGODB_HOST_URL: Joi.required(),
  MONGODB_NAME: Joi.required(),
});