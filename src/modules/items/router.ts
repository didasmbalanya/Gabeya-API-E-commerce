import { Router } from 'express';
import { validatorMiddleware } from '../../utils/middlewares/schema-validator';
import { paramIdObject } from '../../utils/validationSchemas';
import { createItem, deleteItem, getItem, updateItem } from './controller';
import { itemSchema, itemUpdateSchema } from './validationSchema';
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
 *            type: object
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
 *              vendorName:
 *                 type: string
 *                 description: vendor name, defaults to sellers name
 *            required:
 *               - name
 *               - price
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

/**
 * @swagger
 * path:
 *   /items/{id}:
 *    get:
 *      tags:
 *        - item
 *      description: get one item
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
router.get('/:id', validatorMiddleware(paramIdObject, 'params'), getItem);

/**
 * @swagger
 * path:
 *   /items/{id}:
 *    put:
 *      tags:
 *        - item
 *      description: update one item
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
 *      produces:
 *        - application/json
 *      requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *            type: object
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
 *              vendorName:
 *                 type: string
 *                 description: vendor name, defaults to sellers name
 *      responses:
 *        200:
 *          description: success
 *        401:
 *          description: unauthenticated
 *        500:
 *          description: server error
 *
 */
router.put(
  '/:id',
  validatorMiddleware(paramIdObject, 'params'),
  validatorMiddleware(itemUpdateSchema, 'body'),
  updateItem
);

/**
 * @swagger
 * path:
 *   /items/{id}:
 *    delete:
 *      tags:
 *        - item
 *      description: delete one item
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
router.delete('/:id', validatorMiddleware(paramIdObject, 'params'), deleteItem);


export default router;
