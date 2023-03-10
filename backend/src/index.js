import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./Routes/product.route.js";

const app = express();

app.use(express.json());

app.use(indexRoutes);

app.listen(PORT);
console.log(`This server is running on port: ${PORT}`);
