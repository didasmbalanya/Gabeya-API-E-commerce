import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('Dummy api for auth')
})

export default router;
