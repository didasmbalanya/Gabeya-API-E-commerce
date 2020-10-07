import Joi from 'joi';
import {
  requiredStringSchema,
  nameSchema,
} from '../../utils/validationSchemas';

export const itemSchema = Joi.object({
  name: requiredStringSchema,
  photo: nameSchema,
  price: Joi.number().required(),
  description: nameSchema,
  vendorName: nameSchema,
});

export const itemUpdateSchema = Joi.object({
  name: nameSchema,
  photo: nameSchema,
  price: Joi.number(),
  description: nameSchema,
  vendorName: nameSchema,
});

export const orderQueryParamObject = Joi.object({
  order: Joi.string().valid('ASC', 'asc', 'DESC', 'desc').default('ASC'),
  page: Joi.number().default(1).greater(0),
  limit: Joi.number().default(10).greater(0),
});
