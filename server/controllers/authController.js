const { attachAccessTokenCookieToResponse, verifyAccessToken } = require("../utils/jwt")

const User = require("../models/User")

//** ======================== Register User ========================
const register = async (req, res) => {
  const { username, password } = req.body
  const checkUsername = await User.findOne({ username })
  if (checkUsername) return res.status(404).json({ success: false, result: null, error: { errorCode: 404, message: "نام کاربری انتخاب شده تکراری است." } })
  try {
    // Create new user
    const user = await User.create({ username, password })
    // Create user access token
    const tokenUser = { username: user.username, userId: user._id, role: user.role }
    attachAccessTokenCookieToResponse({ res, user: tokenUser })
    res.status(201).json({ success: true, result: tokenUser, error: null })
  } catch (err) {
    if (err.errors.password) err.message = "رمز عبور می‌بایست حداقل ۴ کاراکتر داشته باشد."
    res.status(500).json({ success: false, result: null, error: { errorCode: 500, message: err.message } })
  }
}

//** ======================== Login User ========================
const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) return res.status(404).json({ success: false, result: null, error: { errorCode: 404, message: "نام کاربری و رمز عبور را وارد نمایید." } })
  // Check if the user exists
  const user = await User.findOne({ username })
  if (!user) return res.status(401).json({ success: false, result: null, error: { errorCode: 401, message: "نام کاربری وارد شده صحیح نمی‌باشد." } })
  // Check username & password
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) return res.status(403).json({ success: false, result: null, error: { errorCode: 403, message: "نام کاربری یا رمز عبور وارد شده صحیح نمی‌باشد." } })
  // Create user access token
  const tokenUser = { username: user.username, userId: user._id, role: user.role }
  attachAccessTokenCookieToResponse({ res, user: tokenUser })
  res.json({ success: true, result: tokenUser, error: null })
}

//** ======================== Logout User ========================
const logout = (req, res) => {
  res.cookie("ACCESS_TOKEN", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.json({ success: true, result: { message: "خروج شما با موفقیت انجام شد." }, error: null })
}

//** ======================== Check Authentication ========================
const checkAuth = (req, res) => {
  const accessToken = req.cookies.ACCESS_TOKEN
  if (!accessToken) return res.json({ success: false, result: null, error: { errorCode: 401, message: "برای دسترسی،‌ لطفا وارد سایت شوید." } })
  try {
    verifyAccessToken(accessToken)
    return res.json({ success: true, result: null, error: null })
  } catch (err) {
    return res.json({ success: false, result: null, error: { errorCode: 403, message: err.message } })
  }
}

//** ======================== Check Register & Login ========================
const checkRegisterLogin = async (req, res) => {
  const { username, password } = req.body
  let user = await User.findOne({ username })
  let statusCode = 200
  let message = ""
  if (!user) {
    statusCode = 201
    message = "ثبت نام شما با موفقیت انجام شد."
    try {
      // Create new user
      user = await User.create({ username, password })
    } catch (err) {
      if (err.errors.password) err.message = "رمز عبور می‌بایست حداقل ۴ کاراکتر داشته باشد."
      res.status(500).json({ success: false, result: null, error: { errorCode: 500, message: err.message } })
    }
  } else {
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) return res.status(403).json({ success: false, result: null, error: { errorCode: 403, message: "نام کاربری یا رمز عبور وارد شده صحیح نمی‌باشد." } })
    message = "شما با موفقیت وارد شدید."
  }
  // Create user access token
  const tokenUser = { username: user.username, userId: user._id, role: user.role }
  attachAccessTokenCookieToResponse({ res, user: tokenUser })
  res.status(statusCode).json({ success: true, result: { user: tokenUser, message }, error: null })
}

module.exports = {
  register,
  login,
  logout,
  checkRegisterLogin,
  checkAuth,
}
