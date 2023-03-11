const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');

const cors = require('cors');
const { connect } = require('mongoose');
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Server started on port ${port}`));
