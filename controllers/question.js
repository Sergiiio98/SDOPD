const mongoose = require('mongoose');

const Question = require('../models/question');


exports.createQuestion = async (req, res) => {
    const { body } = req;
    console.log(body);

    if (!body || !body.name || !body.answer || !body.subjectId) {
        res.send({
            status: 400,
            message: "Invalid at least one parameter",
        });
        return;
    }

    const { name, answer, subjectId } = body;

    const question = new Question({ name, answer, subjectId });
    await question.save().then(() => {
        res.send({
            status: 200,
            message: "Success",
            body: body,
        })
    });
};

exports.editQuestion = async (req, res) => {
    Question.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
        if (err)
            res.send({
                status: 400,
                message: "Error",
            })
        else {
            res.send({
                status: 200,
                message: "Success",
            })
        }
    })
};
exports.deleteQuestion = async (req, res) => {
    Question.findByIdAndDelete({ _id: req.params.id }, (err, result) => {
        if (err)
            res.send({
                status: 400,
                message: "Error",
            })
        else {
            res.send({
                status: 200,
                message: "Success",
            })
        }
    })
};

