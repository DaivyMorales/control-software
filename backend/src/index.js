import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./Routes/product.route.js";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

//import Database
import "./dbConnection.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(indexRoutes);

app.listen(PORT);
console.log(`This server is running on port: ${PORT}`);
