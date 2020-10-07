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
  try {
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
  } catch (error) {
    next((error.errors && error.errors[0]) || error);
  }
};

/**
 * @function getItem used to create a single item
 * @param req
 * @param res
 * @param next
 */
export const getItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = (req as any).params;

    const item = await itemService.findById(id);

    if (!item) {
      return res.status(404).send({
        error: {
          message: 'item not found',
        },
      });
    }
    return res.status(200).send({ item });
  } catch (error) {
    next((error.errors && error.errors[0]) || error);
  }
};

/**
 * @function updateItem used to update a single item
 * @param req
 * @param res
 * @param next
 */
export const updateItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, photo, price, description, vendorName } = req.body;
    const { id } = req.params;

    const updated = await itemService.update(id, {
      name,
      photo,
      price,
      description,
      vendorName,
    });

    res.send({ updated });
  } catch (error) {
    next((error.errors && error.errors[0]) || error);
  }
};

/**
 * @function deleteItem used to delete a single item
 * @param req
 * @param res
 * @param next
 */
export const deleteItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    next((error.errors && error.errors[0]) || error);
  }
};

/**
 * @function getItems used to get a paginted and sorted list
 * @param req
 * @param res
 * @param next
 */
export const getItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    next((error.errors && error.errors[0]) || error);
  }
};
