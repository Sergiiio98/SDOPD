const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');

// const dotenv = require('dotenv');
// dotenv.config()


// routes import
const userRoutes = require('./routes/user');
const subjectRoutes = require('./routes/subject');
const questionRoutes = require('./routes/question');
const randQuestionRoutes = require('./routes/randQuestions');

// app
const app = express();
app.use(express.json());
app.use(cors());

// db

const MONGO_URI = "mongodb+srv://dbUser:zpi2021@zpidb.1rqxr.mongodb.net/nodeapi?retryWrites=true&w=majority"
const connectDB = async () => {
    await mongoose.connect(
        MONGO_URI,
        { useNewUrlParser: true }
    )
        .then(() => console.log('DB Connected'))

    mongoose.connection.on('error', err => {
        console.log(`DB connection error: ${err.message}`)
    });

}

connectDB();

// routes middleware
app.use("/api", userRoutes);
app.use("/api", subjectRoutes);
app.use("/api/question", questionRoutes);
app.use("/api", randQuestionRoutes);

const port = process.env.P0RT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});