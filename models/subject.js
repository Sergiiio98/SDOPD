const mongoose = require('mongoose');



const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    term: {
        type: String,
        required: true,
    },
    questions: {
        type: Array,
        required: true,
       
    }
})

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;