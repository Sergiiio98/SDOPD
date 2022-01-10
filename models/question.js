const mongoose = require('mongoose');



const questionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    subjectId: {
        type: String,
        required: true,
    }
})

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;