const Product = require("../models/product.model");
const mongoose = require("mongoose");

const getProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.log("Error in fetching products");
    res.status(500).json({ success: false, message: "server error" });
  }
};
const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all fields" });
  }

  const newproduct = new Product(product);
  try {
    await newproduct.save();
    return res.status(201).json({ success: true, data: newproduct });
  } catch (error) {
    console.error("Error in create product:", error.message);
    return res.status(500).json({ success: false, message: "server Error" });
  }
};
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "invalid product id" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};
const deleteProduct = async (req, res) => {
  const { id } = req.params; //jo value lege usko params se lege..
  try {
    await Product.findByIdAndDelete(id);
    return res.status(200).json({ success: true, message: "product deleted" });
  } catch (error) {
    console.log("error in deleting product");
    return res
      .status(404)
      .json({ success: false, message: "product not found" });
  }
};
module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
