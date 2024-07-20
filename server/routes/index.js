const express = require("express")
const router = express.Router()

const authRouter = require("./authRoutes")
const userRouter = require("./userRoutes")
const productRouter = require("./productRoutes")

router.get("/", (req, res) => {
  res.send("hello")
})

router.use("/auth", authRouter)
router.use("/users", userRouter)
router.use("/products", productRouter)

module.exports = router
