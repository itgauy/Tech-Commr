require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const inquiriesRoutes = require('./routes/inquiries')
const feedbacksRoutes = require('./routes/feedbacks')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api', inquiriesRoutes)
app.use('/api', feedbacksRoutes)

// db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to db')
  })
  .catch((error) => {
    console.log(error)
  })

module.exports = app
