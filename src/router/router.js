import { Router } from "express";
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/controller.product.js";

const router = Router()

//Products
router.get('/product', getProducts)

router.get('/product/:id', getProduct)

router.post('/product-create', addProduct)

router.put('/product-update/:id', updateProduct)

router.delete('/product-delete/:id', deleteProduct)


export default router

