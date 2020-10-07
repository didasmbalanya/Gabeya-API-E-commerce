import Joi from 'joi';

export const passwordSchema = Joi.string().min(5).max(255).trim().required();
export const nameSchema = Joi.string().min(3).max(255).trim().lowercase();
export const requiredStringSchema = Joi.string()
  .min(3)
  .max(255)
  .trim()
  .required()
  .lowercase();

export const emailSchema = Joi.string().email().lowercase().required();

export const numberId = Joi.number().required();

export const paramIdObject = Joi.object({
  id: numberId,
});
