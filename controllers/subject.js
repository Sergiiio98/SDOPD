const mongoose = require('mongoose');

const Subject = require('../models/subject');


exports.getSubjects = async (req, res) => {
    const users = await Subject.find({})
    console.log(users);
    res.send(users);

    // const csvFilePath='./subjects.csv';
    // const csv=require('csvtojson');
    // csv()
    // .fromFile(csvFilePath)
    // .then((jsonObj)=>{
    //     console.log(jsonObj);
    //     res.send(jsonObj);

    // })
    

};