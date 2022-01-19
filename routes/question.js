const express = require('express');
const router = express.Router();

const { createQuestion,
    editQuestion,
    deleteQuestion } = require('../controllers/question');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.post('/create', createQuestion);
router.post('/edit/:id', editQuestion);
router.post('/delete/:id', deleteQuestion);

module.exports = router;