const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  questionTitle: String,
  date: Date,
  private: Boolean,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  answers: [String],
  correctAnswer: Number
})

questionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Question', questionSchema)