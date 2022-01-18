const express = require('express');
const router = express.Router();

const { getRandomQuestion } = require('../controllers/randQuestions');

router.post('/randQst/:id', getRandomQuestion);


module.exports = router;