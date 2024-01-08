const mongoose = require('mongoose')

const {ObjectId} = mongoose.Schema.Types;
// Define Schema
const scoreSchema = new mongoose.Schema({
    username: String,
    date: Date,
    score: Number,
    joke: ObjectId
})

scoreSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// Export model
module.exports = mongoose.model('Scores', scoreSchema)
