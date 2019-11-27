const { fetchUsers, fetchUserByUserID } = require("../models/usersModel.js")

const getUsers = (req, res, next) => {
  fetchUsers().then(users => {
    res.status(200).json({ users })
  })
}

const getUserByUserID = (req, res, next) => {
  const { user_id } = req.params
  fetchUserByUserID(user_id).then(user => {
    res.status(200).json({ user })
  })
}

module.exports = { getUsers, getUserByUserID }
