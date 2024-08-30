const Inquiry = require('../models/inquiryModel')
const mongoose = require('mongoose')

// GET all inquiries (FOR POSTMAN TSAKA SA ADMIN SIDE)
const getInquiries = async (req, res) => {
  const inquiries = await Inquiry.find({}).sort({ createdAt: -1 })

  res.status(200).json(inquiries)
}

// CREATE a new inquiry
module.exports = {                     //REFACTORED: August 30, 2024; FROM: ContactForm.jsx;
  createInquiry: async (req, res) => {
    try {
      const { fname, lname, email, category, desc, termsAgreed } = req.body

      // Validation of input data
      if (!fname || !email || !category || !desc || !termsAgreed) {
        return res.status(400).send({ message: 'Please provide all required fields' });
      }

      // Sanitation and formatting of data
      const sanitizedCategory = category.join(', ')
      const sanitizedDesc = desc.trim()

      // Creation of new inquiry document
      const inquiry = new Inquiry({
        fname,
        lname,
        email,
        category: sanitizedCategory,
        desc: sanitizedDesc,
        termsAgreed
      })

      // Saving of inquiry document
      await inquiry.save()

      // Return of success response
      res.status(200).send({ message: 'Inquiry submitted successfully!' })
    } catch (error) {
      // Log of error and return of error response
      console.error(error)
      res.status(400).send({ message: 'Error creating inquiry. It\'s not you, it\'s us :(' })
    }
  }, getInquiries
}

// // GET a single inquiry
// const getInquiry = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {                    //DO NOT DELETE
//     return res.status(404).json({ error: 'No such inquiry' })
//   }

//   const inquiry = await Workout.findById(id)

//   if (!inquiry) {
//     return res.status(404).json({ error: 'No such inquiry' })
//   }

//   res.status(200).json(inquiry)
// }


// DIRTY CODE EWWWW 🤮
//   const inquiry = new Inquiry({ fname, lname, email, category: category.join(', '), desc, termsAgreed });
//   await inquiry.save();
//   res.status(200).send({ message: 'Inquiry created successfully!' });
// } catch (error) {
//   res.status(400).send({ message: 'Error creating inquiry' });