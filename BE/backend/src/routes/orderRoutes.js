import { Router } from 'express';
import orderController from '../controllers/orderController.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = Router();

// All routes require authentication
router.use(authMiddleware);

router.post('/', orderController.createOrder);
router.get('/:id', orderController.getOrderById);
router.post('/payment', orderController.processPayment);

export default router;
