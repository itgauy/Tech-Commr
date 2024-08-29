const Inquiry = require('../models/inquiryModel')
const mongoose = require('mongoose')

// GET all inquiries
const getInquiries = async (req, res) => {
  const inquiries = await Inquiry.find({}).sort({ createdAt: -1 })

  res.status(200).json(inquiries)
}

// GET a single inquiry
const getInquiry = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such inquiry' })
  }

  const inquiry = await Workout.findById(id)

  if (!inquiry) {
    return res.status(404).json({ error: 'No such inquiry' })
  }

  res.status(200).json(inquiry)
}

// CREATE a new inquiry
const createInquiry = async (req, res) => {
  const { fname, lname, email, category, desc, agree } = req.body

  let emptyFields = []

  if (!fname) {
    emptyFields.push('fname')
  }
  if (!email) {
    emptyFields.push('email')
  }
  if (!category) {
    emptyFields.push('category')
  }
  if (!desc) {
    emptyFields.push('desc')
  }
  if (!agree) {
    emptyFields.push('agree')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }
}