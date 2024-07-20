const { verifyAccessToken } = require("../utils/jwt")

const validateToken = (req, res, next) => {
  const accessToken = req.cookies.ACCESS_TOKEN

  if (!accessToken) return res.status(401).send({ success: false, result: null, error: { errorCode: 401, message: "برای دسترسی،‌ لطفا وارد سایت شوید." } })

  try {
    const payload = verifyAccessToken(accessToken)
    req.user = payload
    // if (validToken) {
    //   req.authenticated = true
    //   return next();
    // }
    next()
  } catch (err) {
    return res.status(403).send({ success: false, result: null, error: { errorCode: 403, message: err.message } })
  }
}

module.exports = { validateToken }
