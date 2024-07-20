const User = require("../models/User")

//** ======================== Get all users ========================
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password")
    res.json({ success: true, result: users, error: null })
  } catch (err) {
    res.status(500).json({ success: false, result: null, error: { errorCode: 500, message: "An error occurred while fetching users: " + err.message } })
  }
}

//** ======================== Get single user ========================
const getSingleUser = async (req, res) => {
  const userId = req.params.id
  try {
    const user = await User.findById(userId).select("-password")
    if (!user) return res.status(404).json({ success: false, result: null, error: { errorCode: 404, message: "User not Found!" } })
    res.json({ success: true, result: user, error: null })
  } catch (err) {
    res.status(500).json({ success: false, result: null, error: { errorCode: 500, message: "An error occurred while fetching the user: " + err.message } })
  }
}

module.exports = {
  getAllUsers,
  getSingleUser,
}
