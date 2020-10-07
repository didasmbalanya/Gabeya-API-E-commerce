import { Router } from 'express';
import { validatorMiddleware } from '../../utils/middlewares/schema-validator';
import { addItemToCart, createCart, getCartDetails } from './controller';
import { cartObjectSchema } from './validationSchema';
const router = Router();

/**
 * @swagger
 * path:
 *   /cart/:
 *    post:
 *      tags:
 *        - cart
 *      description: create cart
 *      security:
 *        - basicAuth : []
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: success
 *        401:
 *          description: unauthenticated
 *        500:
 *          description: server error
 *
 */
router.post('/', createCart);

/**
 * @swagger
 * path:
 *   /cart/add:
 *    post:
 *      tags:
 *        - cart
 *      description: add items/item to cart
 *      security:
 *        - basicAuth : []
 *      produces:
 *        - application/json
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *              cartItems:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     itemId:
 *                       type: integer
 *                     quantity:
 *                       type: integer
 *                 example:
 *                   - itemId: 10
 *                     quantity: 4
 *      responses:
 *        200:
 *          description: success
 *        401:
 *          description: unauthenticated
 *        500:
 *          description: server error
 *
 */
router.post(
  '/add',
  validatorMiddleware(cartObjectSchema, 'body'),
  addItemToCart
);

/**
 * @swagger
 * path:
 *   /cart/:
 *    get:
 *      tags:
 *        - cart
 *      description: get cart details
 *      produces:
 *        - application/json
 *      security:
 *        - basicAuth : []
 *      responses:
 *        200:
 *          description: success
 *        401:
 *          description: unauthenticated
 *        500:
 *          description: server error
 *
 */
router.get('/', getCartDetails);

export default router;
