import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';

// GET /users
router.get('/', userController.getAllUsers);

// GET /users/:id
router.get('/:id', userController.getUserById);

// POST /users
router.post('/', userController.createUser);

// PUT /users/:id
router.put('/:id', userController.updateUser);

// DELETE /users/:id
router.delete('/:id', userController.deleteUser);

export default router;
