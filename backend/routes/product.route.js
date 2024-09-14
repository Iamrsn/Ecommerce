const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/product.model");
const router = express.Router();

//put me sab field ko update kar sakrte hai or patch me kuch hi field ko update kar sakte hai

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
