import { Router } from 'express';
import { validatorMiddleware } from '../../utils/middlewares/schema-validator';
import { createItem } from './controller';
import { itemSchema } from './validationSchema';
const router = Router();

/**
 * @swagger
 * path:
 *   /items/:
 *    post:
 *      tags:
 *        - item
 *      description: create item
 *      security:
 *        - basicAuth : []
 *      produces:
 *        - application/json
 *      requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *            properties:
 *              name:
 *                 type: string
 *                 description: item name
 *              photo:
 *                 type: string
 *                 description: link to photo
 *              price:
 *                 type: number
 *                 description: price of item
 *              description:
 *                 type: string
 *                 description: short description about item
 *      responses:
 *        200:
 *          description: success
 *        401:
 *          description: unauthenticated
 *        500:
 *          description: server error
 *
 */
router.post('/', validatorMiddleware(itemSchema, 'body'), createItem);

export default router;
