const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(()=>{
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('MongoDB connection error:', err);
    });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

const todoRoutes = require('./routes/todos');
app.use('/', todoRoutes);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});