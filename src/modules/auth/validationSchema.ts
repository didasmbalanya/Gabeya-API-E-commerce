import Joi from 'joi';
import {
  emailSchema,
  requiredStringSchema,
  passwordSchema,
} from '../../utils/validationSchemas';

export const userSchema = Joi.object({
  firstName: requiredStringSchema,
  lastName: requiredStringSchema,
  email: emailSchema,
  password: passwordSchema,
  phoneNumber: Joi.string(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
