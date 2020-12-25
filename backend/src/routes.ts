import { Router } from 'express'
import AuthController from './app/controllers/AuthController'

import UserController from './app/controllers/UserController'
import authMiddleware from './app/middlewares/authMiddleware'

const router = Router()


router.post('/auth', AuthController.authenticate)

router.post('/users', UserController.store)

router.get('/users', authMiddleware, UserController.index)

router.get('/users/:email', UserController.get);

//router.get('/users', UserController.getAll);

router.delete('/users/:id', UserController.delete);

router.put('/users/:id', UserController.update);

export default router