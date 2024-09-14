const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true } //timestamp use krte kab create hua or kab update ho raha uska time rakehag
);

const Product = mongoose.model("Product",productSchema)

module.exports=Product;