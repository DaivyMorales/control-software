import { Router } from "express";
import {
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../Controllers/product.controller.js";

const route = Router();

route.get("/", getProduct);
route.post("/", createProduct);
route.put("/", updateProduct);
route.delete("/", deleteProduct);

export default route;
