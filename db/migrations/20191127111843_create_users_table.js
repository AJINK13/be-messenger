exports.up = function(knex) {
  return knex.schema.createTable("users", usersTable => {
      usersTable.increments("user_id").primary()
    usersTable
      .string("username")
      .notNullable()
    usersTable.string("avatar_url").notNullable()
    usersTable.boolean("online_status")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("users")
}
