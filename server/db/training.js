const config = require('./knexfile').development
const connection = require('knex')(config)

function getAllTrainings(db = connection) {
  return db('Trainings').select()
}

function deleteTrainingByDay(day, db = connection) {
  return db('Trainings').delete().where({ day })
}

function updateTrainingById(trainingInfo, db = connection) {
  const { id, day, description, location } = trainingInfo
  return db('Trainings')
    .select()
    .where({ id })
    .update({ day, description, location })
}

module.exports = { getAllTrainings, deleteTrainingByDay, updateTrainingById }
