import { Schema } from 'joi';
import { RequestHandler, Request } from 'express';

/**
 *
 * @param {*} schema validation schema
 * @param {string} property specify which part of the request to validate
 */
export const validatorMiddleware = (
  schema: Schema,
  property: 'body' | 'params' | 'query'
): RequestHandler => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,
    });
    const valid = error == null;
    if (valid) {
      req[property] = value;
      next();
    } else {
      // const { details } = error;
      res.status(422).json({ error });
    }
  };
};
