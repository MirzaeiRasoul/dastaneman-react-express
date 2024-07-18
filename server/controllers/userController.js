const users = require("../mockData/users.json")

const profile = (req, res) => {
  const username = req.userPayload.username
  const user = users.find(user => user.username == username)
  
  res.json({ success: true, result: user, error: null })
}

module.exports = {
  profile,
}
