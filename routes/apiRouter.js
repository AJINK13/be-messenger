const apiRouter = require("express").Router()
const usersRouter = require("./usersRouter.js")

apiRouter.use("/users", usersRouter)

module.exports = apiRouter
