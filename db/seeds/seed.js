const userData = require("../data/testdata/users.js")

exports.seed = function(knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      const usersInsertions = knex("users")
        .insert(userData)
        .returning("*")
      return Promise.all([usersInsertions])
    })
}
