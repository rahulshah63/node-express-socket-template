import express from 'express';

import { createUserController, getUserbyId, validateUserController } from '@/controllers/users.controller';
import authMiddleware from '@/middlewares/auth.middleware';

export default (router: express.Router) => {
  router.get('/user/:userId', authMiddleware, getUserbyId);
  //need admin access role for this
  router.get('/users', createUserController);
  router.post('/user', createUserController);
  router.get('/verify', authMiddleware, validateUserController);
};
