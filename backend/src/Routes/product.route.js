import { Router } from "express";
import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductById,
} from "../Controllers/product.controller.js";

const route = Router();

route.get("/", (req, res) => {
  res.json("LISTO PERRO");
});
route.get("/product", getProducts);
route.get("/product/:idProduct", getProductById);
route.post("/product", createProduct);
route.put("/product/:idProduct", updateProduct);
route.delete("/product/:idProduct", deleteProduct);

export default route;
