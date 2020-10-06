import { Request, Response, NextFunction, RequestHandler } from 'express';
import { itemExists } from '../../utils/constants';
import itemService from './item.service';

/**
 * @function createItem used to create a single item
 * @param req
 * @param res
 * @param next
 */
export const createItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, photo, price, description, vendorName } = req.body;
  const { id, firstName, lastName } = (req as any).user;

  const existingItem = await itemService.findOne({
    where: {
      name,
      userId: id,
    },
  });

  if (existingItem) {
    return res.status(400).send({
      error: {
        message: itemExists,
      },
    });
  }

  const newItem = await itemService.add({
    name,
    photo,
    price,
    description,
    vendorName: vendorName || `${firstName} ${lastName}`,
    userId: id,
  });

  return res.status(200).send({ newItem });

  try {
  } catch (error) {
    next((error.errors && error.errors[0]) || error);
  }
};
