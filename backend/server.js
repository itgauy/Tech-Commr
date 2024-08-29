require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const inquiriesRoutes = require('./routes/inquiries')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/inquiries', inquiriesRoutes)


// Do not delete
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(4000, () => {
//   console.log('3000 listening')
// })

// db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests (3000 local)
    app.listen(process.env.PORT, () => {
      console.log('connected on db and listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })