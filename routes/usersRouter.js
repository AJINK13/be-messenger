const usersRouter = require("express").Router()
const {
  getUsers,
  postUser,
  getUserByUserID,
  patchUserByUserID
} = require("../controllers/usersController.js")

usersRouter.route("/").get(getUsers).post(postUser)

usersRouter
  .route("/:user_id")
  .get(getUserByUserID)
  .patch(patchUserByUserID)

module.exports = usersRouter
