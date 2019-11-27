const apiRouter = require("express").Router()

apiRouter.route("/users", usersRouter)

module.exports = apiRouter
