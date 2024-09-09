const express = require('express')
const {
  getFeedbacks,
  createFeedback
} = require('../controllers/feedbackController')

const router = express.Router()

// GET all feedbacks
router.get('/feedbacks', getFeedbacks)

// POST a new feedback
router.post('/feedback', createFeedback)

module.exports = router