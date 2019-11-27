const usersRouter = require("express").Router()
const { getUsers, getUserByUserID } = require("../controllers/usersController.js")

usersRouter.route("/").get(getUsers)

usersRouter.route("/:user_id").get(getUserByUserID)

module.exports = usersRouter
