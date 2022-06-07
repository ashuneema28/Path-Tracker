const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://admin:12345@path-tracker-cluster.jtiwi.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri);

mongoose.connection.on('connected' , () => {
    console.log('Connected to Mongo Instance')
});

mongoose.connection.on('error' , (err) => {
    console.log('Error connecting to Mongo Instance' , err);
});

app.get('/' , (req, res) => {
    res.send("Hello there!!!!");
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});