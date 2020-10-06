import Joi from 'joi';
import {
  emailSchema,
  nameSchema,
  passwordSchema,
} from '../../utils/validationSchemas';

export const userSchema = Joi.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  phoneNumber: Joi.string(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
