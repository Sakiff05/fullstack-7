import { ProductModel } from "../model/ProductModel.js";

export let ProductController = {
  getAll: async (req, res) => {
    let products = await ProductModel.find();
    res.send(products);
  },
  getById: async (req, res) => {
    let id = req.params.id;
    let product = await ProductModel.findById(id);
    res.send(product);
  },
  post: async (req, res) => {
    let newProduct = ProductModel(req.body);
    await newProduct.save();
    res.send({
      message: "Successfully posted",
      data: req.body,
    });
  },
  delete: async (req, res) => {
    let id = req.params.id;
    await ProductModel.findByIdAndDelete(id);
    res.send({
      message: "Successfully deleted",
    });
  },
  update: async (req, res) => {
    let id = req.params.id;
    await ProductModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send({
      message: "Successfully updated",
      data: req.body,
    });
  },
};
