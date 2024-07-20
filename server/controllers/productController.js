const Product = require("../models/Product")

// Create a new product
const createProduct = async (req, res) => {
  const productData = req.body
  try {
    // const newProduct = await Product.create(req.body)
    const product = new Product(productData)
    const savedProduct = await product.save()
    res.status(201).json(savedProduct)
  } catch (err) {
    res.status(500).json({ success: false, result: null, error: { errorCode: 500, message: "An error occurred while creating the product!" } })
  }
}

// Get all products
const readAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json({ success: true, result: products, error: null })
  } catch (err) {
    res.status(500).json({ success: false, result: null, error: { errorCode: 500, message: "An error occurred while fetching products!" } })
  }
}

// Get a specific product by ID
const readProduct = async (req, res) => {
  const productId = req.params.id
  try {
    const product = await Product.findById(productId)
    if (!product) return res.status(404).json({ success: false, result: null, error: { errorCode: 404, message: "Product not Found!" } })
    res.json({ success: true, result: product, error: null })
  } catch (err) {
    res.status(500).json({ success: false, result: null, error: { errorCode: 500, message: "An error occurred while fetching the product!" } })
  }
}

// Update a product by ID
const updateProduct = async (req, res) => {
  const productId = req.params.id
  const productData = req.body
  try {
    // const updatedProduct = await Product.updateOne({ _id: productId }, productData)
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      productData
      // { new: true }
    )
    if (!updatedProduct) return res.status(404).json({ success: false, result: null, error: { errorCode: 404, message: "Product not Found!" } })
    res.json(updatedProduct)
  } catch (err) {
    res.status(500).json({ success: false, result: null, error: { errorCode: 500, message: "An error occurred while updating the product!" } })
  }
}

// Update partially a product by ID
const updateProductPartially = async (req, res) => {
  const productID = req.params.id
  const productData = req.body
  try {
    const updatedProduct = await Product.findOne({ _id: productID })
    if (!updatedProduct) return res.status(404).json({ success: false, result: null, error: { errorCode: 404, message: "Product not Found!" } })

    productData?.title && (updatedProduct.title = productData.title)
    productData?.excerpt && (updatedProduct.excerpt = productData.excerpt)
    productData?.description && (updatedProduct.description = productData.description)
    productData?.price && (updatedProduct.price = productData.price)
    productData?.buttonText && (updatedProduct.buttonText = productData.buttonText)
    productData?.image && (updatedProduct.image = productData.image)
    productData?.url && (updatedProduct.url = productData.url)
    await updatedProduct.save()

    res.json(updatedProduct)
  } catch (err) {
    res.status(500).json({ success: false, result: null, error: { errorCode: 500, message: "An error occurred while updating the product!" } })
  }
}

// Delete a product by ID
const deleteProduct = async (req, res) => {
  const productId = req.params.id
  try {
    // const updatedProduct = await Product.updateOne({ _id: productId }, productData)
    const deletedProduct = await Product.findByIdAndDelete(productId)
    if (!deletedProduct) return res.status(404).json({ success: false, result: null, error: { errorCode: 404, message: "Product not Found!" } })
    res.json(deletedProduct)
  } catch (err) {
    res.status(500).json({ success: false, result: null, error: { errorCode: 500, message: "An error occurred while updating the product!" } })
  }
}

module.exports = {
  createProduct,
  readAllProducts,
  readProduct,
  updateProduct,
  updateProductPartially,
  deleteProduct,
}
