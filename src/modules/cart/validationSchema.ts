import Joi from 'joi';
import {
  requiredStringSchema,
  nameSchema,
} from '../../utils/validationSchemas';

const cartItemSchema = Joi.object().keys({
  itemId: Joi.number().required(),
  quantity: Joi.number().default(1),
}).required();

const cartItemsSchema = Joi.array().items(cartItemSchema).required();

export const cartObjectSchema = Joi.object({
  cartItems: cartItemsSchema,
});
