/* eslint-disable no-unused-vars */
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');

const cors = require('cors');
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/ingredients', require('./routes/ingredientRoutes'));
app.use('/api/recipes', require('./routes/recipeRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
