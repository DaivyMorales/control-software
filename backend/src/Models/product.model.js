import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    code: String,
    description: String,
    presentation: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Product", ProductSchema);
