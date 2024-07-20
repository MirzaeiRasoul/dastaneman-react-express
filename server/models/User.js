const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "Please enter username"],
    maxLength: [30, "Username cannot exceed 30 characters"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minLength: [4, "Password should be longer 4 character"],
  },
  displayName: {
    type: String,
    trim: true,
    default: "کاربر",
  },
  email: {
    type: String,
    trim: true,
    default: "",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

// Hashed the password before saving the user into database
UserSchema.pre("save", async function () {
  // Only run this 👇 function if password was modified (not on other update functions)
  if (!this.isModified("password")) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// Compare password
UserSchema.methods.comparePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password)
  return isMatch
}

module.exports = mongoose.model("User", UserSchema)
