import Joi from 'joi';
import { emailSchema, nameSchema, passwordSchema } from '../../utils/validationSchemas';

export const userSchema = Joi.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  phoneNumber: Joi.string()
});
