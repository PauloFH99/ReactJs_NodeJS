import { Router } from 'express'
import AuthController from './app/controllers/AuthController'

import UserController from './app/controllers/UserController'
<<<<<<< HEAD
import ProductController from './app/controllers/ProductController'
=======
>>>>>>> 682cd61696aceb753093db31c6133cd5d3ed7289
import authMiddleware from './app/middlewares/authMiddleware'

const router = Router()

<<<<<<< HEAD
//user
=======

>>>>>>> 682cd61696aceb753093db31c6133cd5d3ed7289
router.post('/auth', AuthController.authenticate)

router.post('/users', UserController.store)

router.get('/users', authMiddleware, UserController.index)

router.get('/users/:email', UserController.get);

//router.get('/users', UserController.getAll);

router.delete('/users/:id', UserController.delete);

router.put('/users/:id', UserController.update);

<<<<<<< HEAD
//produto
router.get('/product',ProductController.getProducts)
router.get('/product/:id', ProductController.getProduct)
router.post('/product', ProductController.saveProduct)
router.put('/product/:id', ProductController.updateProduct)
router.delete('/product/:id', ProductController.removeProduct)

=======
>>>>>>> 682cd61696aceb753093db31c6133cd5d3ed7289
export default router