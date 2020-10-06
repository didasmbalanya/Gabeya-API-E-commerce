import { Router } from 'express';
const router = Router();

router.get('/register', (req, res) => {
  res.send('Dummy api for auth')
})

export default router;
