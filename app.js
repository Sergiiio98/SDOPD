const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// routes import
const userRoutes = require('./routes/user');

// app
const app = express();

// db

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
        }).then(()=> console.log("DB connected"));



// routes middleware
app.use("/api", userRoutes);

const port = process.env.P0RT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});