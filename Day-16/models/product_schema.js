const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    discription: String,
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    price: {
      require: true,
      type: Number,
      min: 0,
    },
    quantity: {
      type: Number,
      min: 0,
      default: 1,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = model("product", productSchema); //Name of collection hum isko singular rkhenge lekin y mongodb isse plural bnadega

module.exports = { Product };
