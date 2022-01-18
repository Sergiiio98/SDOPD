const mongoose = require('mongoose');

const Question = require('../models/question');

exports.getRandomQuestion = async (req, res) => {
    const { params } = req;
    console.log(params);

    if (!params || !params.id ) {
        res.send({
            status: 400,
            message: "Invalid parameter",
        });
        return;
    }

    const { id } = params;
    console.log(id);

    const csvFilePath='./student.csv';
    const csv=require('csvtojson');

    const questions = await Question.find({});

    csv()
    .fromFile(csvFilePath)
    .then((studentList)=>{
        // console.log(studentList);
        const student = studentList.find(student => student.id == id);
        const subjectList = student.idList.split(", ");
        
        // console.log(subjectList);
        // console.log(questions);
        // res.send(studentList);

        const userQuestions = questions.filter((item)=>{
           return subjectList.includes(item.subjectId);
        })

        console.log(userQuestions);

        if(userQuestions.length > 3){
            let p = [];

        while(p.length < 3) {
            const t = Math.floor(Math.random() * userQuestions.length);
            if(!p.includes(t))
            p.push(t);
        }
        res.send([userQuestions[p[0]],userQuestions[p[1]],userQuestions[p[2]]]);
            }
        else{
            res.send(userQuestions);
        }
    })
    
};