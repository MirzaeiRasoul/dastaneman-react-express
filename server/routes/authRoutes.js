const express = require("express")
const router = express.Router()

const { register, login, logout, checkRegisterLogin, checkAuth } = require("../controllers/authController")

router.get("/", checkAuth)
router.post("/v2/login", checkRegisterLogin)

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)

module.exports = router
