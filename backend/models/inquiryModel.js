const mongoose = require('mongoose')

const Schema = mongoose.Schema

const inquirySchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)