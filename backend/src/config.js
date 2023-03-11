import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.MONGOPORT || 3000;
