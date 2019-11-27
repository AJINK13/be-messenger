const connection = require("../db/connection.js")

const fetchUsers = () => {
  return connection.select("*").from("users")
}

module.exports = { fetchUsers }
