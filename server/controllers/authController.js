const { generateAccessToken, createAccessTokenCookie, verifyAccessToken } = require("../utils/jwtAuth")

const users = require("../mockData/users.json")

const checkAuth = (req, res) => {
  const accessToken = req.cookies.ACCESS_TOKEN
  if (!accessToken) res.json({ success: false, result: null, error: { errorCode: 401, message: "برای دسترسی،‌ لطفا وارد سایت شوید." } })
  try {
    verifyAccessToken(accessToken)
    return res.json({ success: true, result: null, error: null })
  } catch (err) {
    return res.json({ success: false, result: null, error: { errorCode: 403, message: err.message } })
  }
}

const checkRegisterLogin = (req, res) => {
  const { username, password } = req.body
  const existingUser = users.find(user => user.username == username)
  let message = ""
  let statusCode = 200
  if (!existingUser) {
    message = "ثبت نام شما با موفقیت انجام شد."
    statusCode = 201
  } else {
    if (existingUser.password != password) {
      return res.status(401).send({ success: false, result: null, error: { errorCode: 401, message: "رمز عبور وارد شده صحبح نمی‌باشد." } })
    }
    message = "شما با موفقیت وارد شدید."
  }

  const accessToken = generateAccessToken({ username })
  createAccessTokenCookie(res, accessToken)
  res.status(statusCode).send({ success: true, result: { username, message }, error: null })
}

const register = (req, res) => {
  const newUser = req.body
  const existingUser = users.find(user => user.username == newUser.username)
  if (existingUser) {
    res.sendStatus(403)
    return
  }
  // const hashedPassword = await bcrypt.hash(req.body.password, 10)
  const accessToken = generateAccessToken(newUser)
  createAccessTokenCookie(res, accessToken)
  res.send({ user: newUser, message: "Register successful!" })
}

const login = (req, res) => {
  const reqUser = req.body
  user = users.find(user => user.username == reqUser.username)
  if (!user) {
    res.sendStatus(401)
    return
  }
  if (user.password != reqUser.password) {
    res.sendStatus(403)
    return
  }

  res.send({ user: user, message: "Login successful!" })
}

const logout = (req, res) => {
  res.cookie("ACCESS_TOKEN", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.status(200).send({ success: true, result: { message: "خروج شما با موفقیت انجام شد." }, error: null })
}

module.exports = {
  register,
  login,
  logout,
  checkRegisterLogin,
  checkAuth,
}
