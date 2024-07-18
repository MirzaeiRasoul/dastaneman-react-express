if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.json()) //Used to parse JSON bodies
app.use(cookieParser())

const corsOptions = { origin: ["http://localhost:5173"], credentials: true }
app.use(cors(corsOptions))

// const mongoose = require('mongoose')
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true
// })

// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.on('open', () => console.log('Connected to Mongoose'))

const indexRouter = require("./routes") 
app.use("/", indexRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
