const Inquiry = require('../models/inquiryModel')
const mongoose = require('mongoose')

// // GET all inquiries
// const getInquiries = async (req, res) => {
//   const inquiries = await Inquiry.find({}).sort({ createdAt: -1 })

//   res.status(200).json(inquiries)
// }

// // GET a single inquiry
// const getInquiry = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: 'No such inquiry' })
//   }

//   const inquiry = await Workout.findById(id)

//   if (!inquiry) {
//     return res.status(404).json({ error: 'No such inquiry' })
//   }

//   res.status(200).json(inquiry)
// }

// CREATE a new inquiry
exports.createInquiry = async (req, res) => {
  try {
    const { fname, lname, email, category, desc, termsAgreed } = req.body;

    if (!fname || !email || !category || !desc || !termsAgreed) {
      return res.status(400).send({ message: 'Please provide all required fields' });
    }

    const inquiry = new Inquiry({ fname, lname, email, category: category.join(', '), desc, termsAgreed });
    await inquiry.save();
    res.status(200).send({ message: 'Inquiry created successfully!' });
  } catch (error) {
    res.status(400).send({ message: 'Error creating inquiry' });
  }
}
