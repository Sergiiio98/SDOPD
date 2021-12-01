const express = require('express');
const router = express.Router();

const {sayHi} = require('../controllers/user');

router.get('/users', sayHi);

module.exports = router;