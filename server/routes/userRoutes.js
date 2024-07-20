const express = require("express")
const router = express.Router()

const { getAllUsers, getSingleUser } = require("../controllers/userController")
const { validateToken } = require("../middlewares/authMiddleware")

router.get("/", getAllUsers)
router.get("/:id", validateToken, getSingleUser)

module.exports = router
