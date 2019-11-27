const apiRouter = require("express").Router()
const getEndpoints = require("../controllers/getEndpoints.js")
const usersRouter = require("./usersRouter.js")

apiRouter.route("/").get(getEndpoints)

apiRouter.use("/users", usersRouter)

module.exports = apiRouter
