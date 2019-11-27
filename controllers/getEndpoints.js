const apiEndpoints = require("../endpoints.json")

const getEndpoints = (req, res, next) => {
  res.status(200).json(apiEndpoints)
}

module.exports = getEndpoints