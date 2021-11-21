const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// app
const app = express();

// db

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
        }).then(()=> console.log("DB connected"));



// routes
app.get('/', (req, res) => {
    res.send("Hello from node ;)")
});

const port = process.env.P0RT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});