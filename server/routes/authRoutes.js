const express = require("express")
const router = express.Router()

const { register, login, logout, checkRegisterLogin, checkAuth } = require("../controllers/authController")

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)

router.get("/", checkAuth)
router.post("/v2/login", checkRegisterLogin)

module.exports = router
