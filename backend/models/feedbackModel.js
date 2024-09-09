const mongoose = require('mongoose')

const Schema = mongoose.Schema

const feedbackSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  category: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  isAccepted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

module.exports = mongoose.model('Feedback', feedbackSchema)
