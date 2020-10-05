import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';
import { swaggerSpec } from '../utils/swagger';
import cartRouter from '../modules/cart/router';
import authRouter from '../modules/auth/router';
import itemsRouter from '../modules/items/router';

const router = Router();

// root route
router.get('/', (req, res) => {
  res.status(200).send('Welcome to Gabeya E commerce api');
});

// swagger-ui
router.use('/api-docs', serve, setup(swaggerSpec));

// main route handler for auth routes
router.use('/auth', authRouter);

// main route handler for items routes
router.use('/items', itemsRouter);

// main route handler for cart routes
router.use('/cart', cartRouter);

export default router;
