exports.up = function (knex) {
  return knex.schema.createTable('Trainings', (table) => {
    table.increments()
    table.string('day')
    table.string('description')
    table.string('location')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Trainings')
}
