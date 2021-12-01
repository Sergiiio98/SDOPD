const express = require('express');
const router = express.Router();

const {getSubjects} = require('../controllers/subject');

router.get('/subjects', getSubjects);

module.exports = router;