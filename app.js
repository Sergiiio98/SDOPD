const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const dotenv = require('dotenv');
dotenv.config()


// routes import
const userRoutes = require('./routes/user');
const subjectRoutes = require('./routes/subject');
const questionRoutes = require('./routes/question');

// app
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));


// db

const connectDB = async () => {
    await mongoose.connect(
        process.env.MONGO_URI,
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

const port = process.env.P0RT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});