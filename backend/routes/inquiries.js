const express = require('express')
const {
  // getInquiries,
  // getInquiry,
  createInquiry
} = require('../controllers/inquiryController')

const router = express.Router()

// // GET all inquiries
// router.get('/', getInquiries)

// // GET a single inquiry
// router.get('/', getInquiry)

// POST a new inquiry
router.post('/inquiry', createInquiry)

module.exports = router