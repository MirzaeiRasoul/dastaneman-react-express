const jwt = require("jsonwebtoken")

const oneDay = 1000 * 60 * 60 * 24
// const expiresIn = 1000 * 60 * 60 * 24 * 30 // 30 Days

const generateAccessToken = ({ username }) => {
  const payload = { username }
  // const payload = { username, id }
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: Math.floor(Date.now() / 1000) + oneDay,
  })
  return token
}

const verifyAccessToken = token => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY)
}

const createAccessTokenCookie = (res, token) => {
  res.cookie("ACCESS_TOKEN", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    // sameSite: "none"
  })
}

module.exports = {
  generateAccessToken,
  verifyAccessToken,
  createAccessTokenCookie,
}
