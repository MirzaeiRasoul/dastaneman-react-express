if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const express = require("express")
const app = express()
const port = process.env.PORT || 3500

// const mongoose = require("mongoose")
const connectDB = require("./config/mongoose")

const cookieParser = require("cookie-parser")
const corsOptions = require("./config/corsOptions")
const cors = require("cors")
const indexRouter = require("./routes")

// Connect to MongoDB
connectDB()

// Built-in middleware for parse JSON bodies
app.use(express.json())

// Middleware for cookies
app.use(cookieParser())

// Cross origin resource sharing
app.use(cors(corsOptions))

// Routes
app.use("/", indexRouter)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

// mongoose.connection.once("open", () => {
//   app.listen(port, () => console.log(`Server is running on port ${port}`))
// })
