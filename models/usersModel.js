const connection = require("../db/connection.js")

const fetchUsers = () => {
  return connection.select("*").from("users")
}

const addUser = infoUser => {
  const newUser = {
    username: infoUser.username,
    avatar_url: infoUser.avatar_url,
    online_status: false
  }
  return connection
    .insert(newUser)
    .into("users")
    .returning("*")
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

module.exports = { fetchUsers, addUser, fetchUserByUserID, updateUserByUserID }
