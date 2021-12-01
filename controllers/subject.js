const mongoose = require('mongoose');

const Subject = require('../models/subject');


exports.getSubjects = async (req, res) => {
    const users = await Subject.find({})
    console.log(users);
    res.send(users);

};