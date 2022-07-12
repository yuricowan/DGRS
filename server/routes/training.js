const express = require('express')

// eslint-disable-next-line no-unused-vars
const db = require('../db/training')

const router = express.Router()

// /api/training
router.get('/', (req, res) => {
  return db
    .getAllTrainings()
    .then((response) => {
      res.json(response)
    })
    .catch(() => {
      res.status(200).send(`Server error`)
    })
})

router.patch('/update', (req, res) => {
  return db
    .updateTrainingById(req.body)
    .then((response) => {
      console.log(`Patch route hit`)
      res.status(202).json(response)
    })
    .catch(() => {
      res.status(500).send(`server error`)
    })
})

router.delete('/delete', (req, res) => {
  return db
    .deleteTrainingByDay(req.body.day)
    .then(() => {
      res.sendStatus(204)
    })
    .catch(() => {
      res.status(500).send(`server error`)
    })
})

module.exports = router
