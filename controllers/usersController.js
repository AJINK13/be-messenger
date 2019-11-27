const {
  fetchUsers,
  fetchUserByUserID,
  updateUserByUserID
} = require("../models/usersModel.js")

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

const patchUserByUserID = (req, res, next) => {
  const { user_id } = req.params
  const patchUser = req.body
  updateUserByUserID(user_id, patchUser).then(user => {
    console.log(user[0])
    res.status(200).json( user[0] )
  })
}

module.exports = { getUsers, getUserByUserID, patchUserByUserID }
