import Joi from 'joi';
import {
  requiredStringSchema,
  nameSchema
} from '../../utils/validationSchemas';

export const itemSchema = Joi.object({
  name: requiredStringSchema,
  photo: requiredStringSchema,
  price: Joi.number(),
  description: nameSchema,
  vendorName: nameSchema,
});
