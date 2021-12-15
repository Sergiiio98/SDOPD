const mongoose = require('mongoose');

const User = require('../models/user');


exports.sayHi = async (req, res) => {
    // const users = await User.find({})
    // console.log(users);
    // res.send(users);

    const csvFilePath='./student.csv';
    const csv=require('csvtojson');
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);
        res.send(jsonObj);

    })

};