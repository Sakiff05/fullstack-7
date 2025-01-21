import { Schema, model } from "mongoose";

let ProductSchema = new Schema({
  title: String,
  img: String,
  desc: String,
});

export let ProductModel = new model("products", ProductSchema);
