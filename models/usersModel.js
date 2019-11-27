const connection = require("../db/connection.js")

const fetchUsers = () => {
  return connection.select("*").from("users")
}

const fetchUserByUserID = user_id => {
  return connection("users")
    .first("*")
    .where("user_id", user_id)
}

module.exports = { fetchUsers, fetchUserByUserID }
