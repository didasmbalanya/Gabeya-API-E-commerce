import { Request, Response, NextFunction } from 'express';
import cartService from './cart.service';

/**
 * @function createCart used to create a cart to load items
 * @param req
 * @param res
 * @param next
 */
export const createCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: userId } = (req as any).user;

    let returnCart;
    const alreadyExists = await cartService.findOne({
      where: {
        userId,
      },
    });

    if (alreadyExists) {
      returnCart = alreadyExists;
    } else {
      returnCart = await cartService.add({
        userId,
      });
    }

    return res.status(200).send({ cart: returnCart });
  } catch (error) {
    next((error.errors && error.errors[0]) || error);
  }
};
