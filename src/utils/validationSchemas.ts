import Joi from 'joi';

export const passwordSchema = Joi.string().min(5).max(255).trim().required();
export const nameSchema = Joi.string().min(3).max(255).trim();

export const emailSchema = Joi.string().email().lowercase().required();