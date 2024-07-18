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

const indexRouter = require("./routes") 
app.use("/", indexRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
