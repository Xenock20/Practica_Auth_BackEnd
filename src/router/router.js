import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/controller.product.js";
import { addUser, getUser } from "../controllers/controller.user.js";
import { validateToken } from "./validate.router.js";

const router = Router();

//Users
router.post("/register", addUser);

router.post("/login", getUser);

//Products
router.get("/product", validateToken, getProducts);

router.get("/product/:id", validateToken, getProduct);

router.post("/product-create", validateToken, addProduct);

router.put("/product-update/:id", validateToken, updateProduct);

router.delete("/product-delete/:id", validateToken, deleteProduct);

export default router;
