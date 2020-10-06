import { Router } from 'express';
import { validatorMiddleware } from '../../utils/middlewares/schema-validator';
import { login, register } from './controller';
import { loginSchema, userSchema } from './validationSchema';
const router = Router();

/**
 * @swagger
 * path:
 *   /auth/register:
 *    post:
 *      tags:
 *        - user
 *      description: registering a user
 *      produces:
 *        - application/json
 *      requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *            properties:
 *              firstName:
 *                 type: string
 *                 description: user first name
 *              lastName:
 *                 type: string
 *                 description: user last name
 *              email:
 *                 type: string
 *                 description: user email
 *              phoneNumber:
 *                 type: string
 *                 description: user phone
 *              password:
 *                 type: string
 *                 description: user password
 *      responses:
 *        200:
 *          description: success
 *        422:
 *          description: input validation error
 *        500:
 *          description: server error
 *
 */
router.post('/register', validatorMiddleware(userSchema, 'body'), register);

/**
 * @swagger
 * path:
 *   /auth/login:
 *    post:
 *      tags:
 *        - user
 *      description: garanting a token to a valid a user
 *      produces:
 *        - application/json
 *      requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *            properties:
 *              email:
 *                 type: string
 *                 description: user email
 *              password:
 *                 type: string
 *                 description: user password
 *      responses:
 *        200:
 *          description: success
 *        401:
 *          description: invalid credentials
 *        500:
 *          description: server error
 *
 */
router.post('/login', validatorMiddleware(loginSchema, 'body'), login);

export default router;
