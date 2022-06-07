require('./models/User')
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = 'mongodb+srv://admin:12345@path-tracker-cluster.jtiwi.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri);

mongoose.connection.on('connected' , () => {
    console.log('Connected to Mongo Instance')
});

mongoose.connection.on('error' , (err) => {
    console.log('Error connecting to Mongo Instance' , err);
});

app.get('/' , requireAuth, (req, res) => {
    res.send(`Your email is : ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});