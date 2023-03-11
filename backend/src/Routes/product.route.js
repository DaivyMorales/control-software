import { Router } from "express";
import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductById,
} from "../Controllers/product.controller.js";

const route = Router();

route.get("/", getProducts);
route.get("/:idProduct", getProductById);
route.post("/", createProduct);
route.put("/:idProduct", updateProduct);
route.delete("/:idProduct", deleteProduct);

export default route;
