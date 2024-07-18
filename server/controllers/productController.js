const products = require("../mockData/products.json")

const readAllProducts = (req, res) => {
  const page = req.query.page
  if (!page) return res.json({ success: true, result: products, error: null })
  const perPage = req.query.per_page || products.length
  const paginateProducts = products.slice(page * perPage - perPage, page * perPage)
  res.json({ success: true, pages: Math.ceil(products.length / perPage), result: paginateProducts, error: null })
}

const createProduct = (req, res) => {
  const newProduct = req.body
  console.log(newProduct)
  const updatedProducts = [...products, newProduct]
  res.json(updatedProducts)
}

const readProduct = (req, res) => {
  const product = products.find(product => product.id == req.params.id)
  if (!product) return res.status(400).send({ success: false, result: null, error: { errorCode: 400, message: "Product not Found!" } })
  res.json({ success: true, result: product, error: null })
}

const updateProduct = (req, res) => {
  console.log(req.params.id)
  const updatedProductID = req.params.id
  const updatedProductData = req.body
  const updatedProductsList = products.map(product => {
    if (product.id == updatedProductID) return { id: updatedProductID, ...updatedProductData }
    return product
  })
  res.json(updatedProductsList)
}

updateProductPartially = (req, res) => {
  const updatedProductID = req.params.id
  const updatedProduct = products.find(product => {
    if (product.id == updatedProductID) {
      req.body?.title && (product.title = req.body.title)
      req.body?.summary && (product.summary = req.body.summary)
      req.body?.detail && (product.detail = req.body.detail)
      req.body?.price && (product.price = req.body.price)
      req.body?.btnText && (product.btnText = req.body.btnText)
      req.body?.imgSrc && (product.imgSrc = req.body.imgSrc)
      req.body?.url && (product.url = req.body.url)
    }
    return product
  })
  res.json(updatedProduct)
}

const deleteProduct = (req, res) => {
  const deletedProductID = req.params.id
  const updatedProducts = products.filter(product => product.id != deletedProductID)
  res.json(updatedProducts)
}

module.exports = {
  readAllProducts,
  readProduct,
  createProduct,
  updateProduct,
  updateProductPartially,
  deleteProduct,
}
