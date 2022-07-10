const express = require('express')

// eslint-disable-next-line no-unused-vars
const db = require('../db/training')

const router = express.Router()

// /api/training
router.get('/', (req, res) => {
  db.getAllTrainings()
    .then((response) => {
      res.json(response)
    })
    .catch(() => {
      res.status(200).send(`Server error`)
    })
})

module.exports = router
