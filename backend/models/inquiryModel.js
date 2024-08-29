const mongoose = require('mongoose')

const Schema = mongoose.Schema

const inquirySchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String
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
  },
  termsAgreed: {
    type: Boolean,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Inquiry', inquirySchema)