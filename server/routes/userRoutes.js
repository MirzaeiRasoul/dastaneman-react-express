const express = require("express")
const router = express.Router()

const { profile } = require("../controllers/userController")
const { validateToken } = require("../middlewares/authMiddleware")

router.get("/profile", validateToken, profile)

module.exports = router
