import { Router } from 'express';
import userRoutes from './user.routes.js';
import productRoutes from './productRoutes.js';
import authRoutes from './authRoutes.js';
import orderRoutes from './orderRoutes.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/auth', authRoutes);
router.use('/orders', orderRoutes);

export default router;
