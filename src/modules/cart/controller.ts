import { Request, Response, NextFunction } from 'express';
import Cart from '../../database/models/cart';
import Item from '../../database/models/item';
import { notFound } from '../../utils/constants';
import itemService from '../items/item.service';
import cartService from './cart.service';
import cartItemService from './cartItem.service';

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

/**
 * @function addItemToCart used to items to a cart
 * @param req
 * @param res
 * @param next
 */
export const addItemToCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: userId } = (req as any).user;
    const { cartItems } = req.body;

    let cart: Cart | null;
    cart = await cartService.findOne({
      where: {
        userId,
      },
    });

    if (!cart) {
      cart = await cartService.add({
        userId,
      });
    }

    const cartAddPromise = cartItems.map((item: any) => {
      return cartItemService.add({
        cartId: cart!.id,
        itemId: item.itemId,
        quantity: item.quantity,
      });
    });

    const cartAdds = await Promise.all(cartAddPromise);

    // cart definately esists, add items

    res.send({ cartAdds });
  } catch (error) {
    next((error.errors && error.errors[0]) || error);
  }
};

/**
 * @function getCartDetails used to items to a cart
 * @param req
 * @param res
 * @param next
 */
export const getCartDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: userId } = (req as any).user;
    const cart = await cartService.findOne({
      where: {
        userId,
      },
    });

    if (!cart) {
      return res.status(404).send({
        message: 'cart has nothing',
      });
    }

    //cart has items
    const details = await cartService.findOne({
      where: {
        id: cart.id,
      },

      include: ['items'],
    });

    return res.status(200).send({ details });
  } catch (error) {
    next((error.errors && error.errors[0]) || error);
  }
};
