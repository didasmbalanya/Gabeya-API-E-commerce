import { Router } from 'express';
import { createCart } from './controller';
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

export default router;
