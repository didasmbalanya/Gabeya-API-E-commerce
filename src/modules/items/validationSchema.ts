import Joi from 'joi';
import {
  requiredStringSchema,
  nameSchema
} from '../../utils/validationSchemas';

export const itemSchema = Joi.object({
  name: requiredStringSchema,
  photo: nameSchema,
  price: Joi.number().required(),
  description: nameSchema,
  vendorName: nameSchema,
});
