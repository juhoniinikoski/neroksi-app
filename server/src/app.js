const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const config = require('./config/config')
const Category = require('./models/category')
const Question = require('./models/question')
const User = require('./models/user')

app.use(cors())

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('📡 Connected to MongoDB')
  })
  .catch((error) => {
    logger.error('😞 Error connection to MongoDB:', error.message)
})

module.exports = app