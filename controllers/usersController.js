const { fetchUsers } = require("../models/usersModel.js")

const getUsers = (req, res, next) => {
  fetchUsers().then(uers => {
    res.status(200).json({ users })
  })
}

module.exports = { getUsers }
