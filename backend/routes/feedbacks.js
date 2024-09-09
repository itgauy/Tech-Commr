const express = require('express')
const {
  getFeedbacks,
  createFeedback,
  getAcceptedFeedbacks,
  updateFeedbackToAccepted
} = require('../controllers/feedbackController')

const router = express.Router()

// GET all feedbacks
router.get('/feedbacks', getFeedbacks)

// GET all accepted feedbacks
router.get('/accepted', getAcceptedFeedbacks)

// POST a new feedback
router.post('/feedback', createFeedback)

// PATCH a feedback to accepted
router.patch('/feedbacks/:id', updateFeedbackToAccepted)

module.exports = router
