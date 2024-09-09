const Feedback = require('../models/feedbackModel')
const mongoose = require('mongoose')

// GET all feedbacks (FOR POSTMAN TSAKA SA ADMIN SIDE)
const getFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find({}).sort({ createdAt: -1 })

  res.status(200).json(feedbacks)
}

// CREATE a new feedback
module.exports = {
  createFeedback: async (req, res) => {
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
        desc: sanitizedDesc
      })

      // Saving of feedback document
      await feedback.save()

      // Return of success response
      res.status(200).send({ message: 'Feedback submitted successfully!' })
    } catch (error) {
      // Log of error and return of error response
      console.error(error)
      res.status(400).send({ message: 'Error creating feedback. It\'s not you, it\'s us :(' })
    }
  }, getFeedbacks
}

// Bye bye bye: Song from Deadpool