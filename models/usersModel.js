const connection = require("../db/connection.js")

const fetchUsers = () => {
  return connection.select("*").from("users")
}

const fetchUserByUserID = user_id => {
  return connection("users")
    .first("*")
    .where("user_id", user_id)
}

const updateUserByUserID = (user_id, patchUser) => {
  return connection("users")
    .first("*")
    .where("user_id", user_id)
    .update("username", patchUser.username)
    .update("avatar_url", patchUser.avatar_url)
    .update("online_status", patchUser.online_status)
    .returning("*")
}

module.exports = { fetchUsers, fetchUserByUserID, updateUserByUserID }
