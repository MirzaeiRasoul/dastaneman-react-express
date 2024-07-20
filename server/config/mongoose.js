const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log("Connected to MongoDB.")
  } catch (error) {
    console.error("Failed to Connect to MongoDB:", error)
    // Exit process with failure
    process.exit(1)
  }
}

module.exports = connectDB
