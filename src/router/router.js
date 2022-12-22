import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/controller.product.js";
import { addUser, getUser } from "../controllers/controller.user.js";

const router = Router();

//Users
router.post("/register", addUser);

router.post("/login", getUser);

//Products
router.get("/product", getProducts);

router.get("/product/:id", getProduct);

router.post("/product-create", addProduct);

router.put("/product-update/:id", updateProduct);

router.delete("/product-delete/:id", deleteProduct);

export default router;
