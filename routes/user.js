"use strict";
const express = require('express');
const router = express.Router();

const { sayHi } = require('../controllers/user');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.route("/list")
    .post(async (req, res) => {
        console.log(req.body)
        res.send(req.body)
    })

router.get('/users', sayHi);

module.exports = router;