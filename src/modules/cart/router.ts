import { Router } from 'express';
import { validatorMiddleware } from '../../utils/middlewares/schema-validator';
import { paramIdObject } from '../../utils/validationSchemas';
import { addItemToCart, createCart, getCartDetails, removeItemFromCart } from './controller';
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

/**
 * @swagger
 * path:
 *   /cart/{id}:
 *    delete:
 *      tags:
 *        - cart
 *      description: remove one item from cart
 *      produces:
 *        - application/json
 *      security:
 *        - basicAuth : []
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          style: form
 *          description: unique key identifier
 *          schema:
 *           type: integer
 *      responses:
 *        200:
 *          description: success
 *        401:
 *          description: unauthenticated
 *        500:
 *          description: server error
 *
 */
router.delete(
  '/:id',
  validatorMiddleware(paramIdObject, 'params'),
  removeItemFromCart
);

export default router;
