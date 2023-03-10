import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    code: String,
    description: String,
    presentation: Number,
  },
  {
    timestamps: true,
    versionKey: true,
  }
);

export default model("Product", ProductSchema);
