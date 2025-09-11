import { Router } from 'express';
import userRoutes from './user.routes.js';
import productRoutes from './productRoutes.js';
const router = Router();

router.use('/users', userRoutes);
router.use('/products', productRoutes);

export default router;
