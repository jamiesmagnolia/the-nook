import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';


/**
 * Loads the environment variables in .env file
 * (e.g. MONGO_URI, PORT) into the process.env object.
 */
dotenv.config();

/**
 * Initializing an Express app. This is an app instance.
 * It handles HTTP requests, routes, middleware, and responses.
 */
const app = express();

/**
 * Enables JSON parsing.
 * This middleware tells Express to parse incoming requests with JSON payloads.
 * It makes the data available in req.body.
 * 
 * This allows the app to handle JSON requests correctly (e.g. creating, updating resources).
 */
app.use(express.json());

/**
 * Connecting to MongoDB.
 */
mongoose.connect(process.env.MONGO_URI) // connects using connection string stored in process.env.MONGO_URI
    .then(() => console.log('MongoDB is connected!')) // post successful connection -> logs "successful connection!"
    .catch(err => console.error('MongoDB connection error:', err)); // catches and logs errors during connection process

/**
 * process.env.PORT dynamically retrieves the port from the .env file (useful for deployment).
 * Default PORT is 5000 is none is specified.
 * 
 * app.listen() starts the server, begins listening for incoming HTTP requests.
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));