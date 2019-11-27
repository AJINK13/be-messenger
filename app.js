const express = require("express")
const cors = require("cors")
const app = express()
const apiRouter = require("./routes/apiRouter.js")

app.use(express.json())
app.use(cors())

app.use("/api", apiRouter)

module.exports = app
