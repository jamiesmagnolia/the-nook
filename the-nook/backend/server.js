const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');

// ES6 syntax leads to node error???
// import mongoose from 'mongoose';
// import express from 'express';
// import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));