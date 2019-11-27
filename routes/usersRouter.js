const usersRouter = require("express").Router()
const {
  getUsers,
  getUserByUserID,
  patchUserByUserID
} = require("../controllers/usersController.js")

usersRouter.route("/").get(getUsers)

usersRouter
  .route("/:user_id")
  .get(getUserByUserID)
  .patch(patchUserByUserID)

module.exports = usersRouter
