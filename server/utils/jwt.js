const jwt = require("jsonwebtoken")

const oneDay = 1000 * 60 * 60 * 24

const createAccessToken = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: Math.floor(Date.now() / 1000) + oneDay,
  })
  return token
}

const verifyAccessToken = token => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY)
}

const attachAccessTokenCookieToResponse = ({ res, user }) => {
  const token = createAccessToken({ payload: user })
  res.cookie("ACCESS_TOKEN", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    // signed: true,
    // sameSite: "none"
  })
}

module.exports = {
  createAccessToken,
  verifyAccessToken,
  attachAccessTokenCookieToResponse,
}
