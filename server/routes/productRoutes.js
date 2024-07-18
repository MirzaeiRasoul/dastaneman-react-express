const express = require("express")
const router = express.Router()

const { readAllProducts, readProduct, createProduct, updateProduct, updateProductPartially, deleteProduct } = require("../controllers/productController")

router.get("/", readAllProducts)
router.post("/", createProduct)

router.get("/:id", readProduct)
router.put("/:id", updateProduct)
router.patch("/:id", updateProductPartially)
router.delete("/:id", deleteProduct)

module.exports = router
