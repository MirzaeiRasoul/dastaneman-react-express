const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter product title"],
    trim: true,
    maxLength: [100, "Product title cannot exceed 100 characters"],
  },
  excerpt: {
    type: String,
    required: [true, "A product must have a excerpt."],
  },
  description: {
    type: String,
    required: [true, "A product must have a description."],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [10, "Product price cannot exceed 10 characters"],
    default: 0.0,
  },
  image: {
    type: String,
    default: "/img/cover-new.jpg",
  },
  buttonText: {
    type: String,
    default: "انتخاب محصول",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Product", productSchema)
