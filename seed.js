const mongoose = require('mongoose');
const User = require('./models/user');

const userArr = [
    {
        name: 'Tom',
        albumnumber: '123456'
    },
    {
        name: 'Bob',
        albumnumber: '101101'
    },
    {
        name: 'Sam',
        albumnumber: '000000'
    },
]

    User.insertMany(userArr)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })

