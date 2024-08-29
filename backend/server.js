require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log()(req.path, req.method)
  next()
})

// routes



// Do not delete
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(4000, () => {
//   console.log('4000 listening')
// })

// db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests (4000 local)
    app.listen(process.env.PORT, () => {
      console.log('connected on db and listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })