import { Router } from 'express';
import { validatorMiddleware } from '../../utils/middlewares/schema-validator';
import { register } from './controller';
import { userSchema } from './validationSchema';
const router = Router();

router.post('/register', validatorMiddleware(userSchema, 'body'), register);

export default router;
