const express = require('express');
const router = express.Router();

const { createQuestion,
    editQuestion,
    deleteQuestion } = require('../controllers/question');

router.post('/create', createQuestion);
router.post('/edit/:id', editQuestion);
router.post('/delete/:id', deleteQuestion);

module.exports = router;