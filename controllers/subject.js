const mongoose = require('mongoose');

const Subject = require('../models/subject');
const Question = require('../models/question');



exports.getSubjects = async (req, res) => {
    // const users = await Subject.find({})
    // console.log(users);
    // res.send(users);

    const allQuestion = await Question.find({});
    console.log(allQuestion);
    const csvFilePath='./subjects.csv';
    const csv=require('csvtojson');
    
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        // console.log(jsonObj);
        jsonObj = jsonObj.map(it =>{
            it.questions = [];
            it.questions = allQuestion.filter(q => q.subjectId == it.id);
            return it;
        })
        console.log(jsonObj);
        res.send(jsonObj);

    })
    

};