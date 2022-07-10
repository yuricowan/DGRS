const express = require('express')
const path = require('path')
const server = express()

const training = require('./routes/training')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/training', training)

module.exports = server
