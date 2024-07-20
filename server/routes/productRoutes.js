const express = require("express")
const router = express.Router()

const { createProduct, readAllProducts, readProduct, updateProduct, updateProductPartially, deleteProduct } = require("../controllers/productController")

router.post("/", createProduct)
router.get("/", readAllProducts)
router.get("/:id", readProduct)
router.put("/:id", updateProduct)
router.patch("/:id", updateProductPartially)
router.delete("/:id", deleteProduct)

module.exports = router
