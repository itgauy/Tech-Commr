const Feedback = require('../models/feedbackModel')
const mongoose = require('mongoose')

// GET all feedbacks (FOR POSTMAN TSAKA SA ADMIN SIDE)
const getFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find({}).sort({ createdAt: -1 })

  res.status(200).json(feedbacks)
}

// GET all accepted feedbacks
const getAcceptedFeedbacks = async (req, res) => {
  const acceptedFeedbacks = await Feedback.find({ isAccepted: true }).sort({ createdAt: -1 })

  res.status(200).json(acceptedFeedbacks)
}

// CREATE a new feedback
const createFeedback = async (req, res) => {
  try {
    const { fname, lname, rating, category, desc } = req.body

    // Validation of input data
    if (!fname || !category || !desc || !rating) {
      return res.status(400).send({ message: 'Please provide all required fields' });
    }

    // Sanitation and formatting of data
    const sanitizedDesc = desc.trim()

    // Creation of new feedback document
    const feedback = new Feedback({
      fname,
      lname,
      rating,
      category,
      desc: sanitizedDesc,
      isAccepted: false // Set isAccepted to false by default
    })

    // Saving of feedback document
    await feedback.save()

    // Return of success response
    res.status(200).send({ message: 'Feedback submitted for approval!' })
  } catch (error) {
    // Log of error and return of error response
    console.error(error)
    res.status(400).send({ message: 'Error creating feedback. It\'s not you, it\'s us :(' })
  }
}

// UPDATE a feedback to accepted
const updateFeedbackToAccepted = async (req, res) => {
  try {
    const id = req.params.id

    // Find the feedback by id
    const feedback = await Feedback.findById(id)

    if (!feedback) {
      return res.status(404).send({ message: 'Feedback not found' })
    }

    // Update the feedback to accepted
    feedback.isAccepted = true
    await feedback.save()

    // Return of success response
    res.status(200).send({ message: 'Feedback updated to accepted successfully!' })
  } catch (error) {
    // Log of error and return of error response
    console.error(error)
    res.status(400).send({ message: 'Error updating feedback. It\'s not you, it\'s us :(' })
  }
}

module.exports = {
  createFeedback,
  getFeedbacks,
  getAcceptedFeedbacks,
  updateFeedbackToAccepted
}
