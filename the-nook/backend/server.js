import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';

// Configure between commonJS (default) and ES6 module in package.json
// const mongoose = require('mongoose');
// const express = require('express');
// const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Enable JSON parsing
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB is connected!'))
    .catch(err => console.error('MongoDB connection error:', err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));