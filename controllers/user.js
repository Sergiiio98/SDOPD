const mongoose = require('mongoose');

const User = require('../models/user');


exports.sayHi = async (req, res) => {
    const users = await User.find({})
    console.log(users);
    res.send(users);

};