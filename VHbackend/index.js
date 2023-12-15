// npm packages
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Import routes
import registerRoute from "./routes/auth/register.js";
import loginRoute from "./routes/auth/login.js";

// Create an express application
const app = express();
app.use(cors())
//configure environment variables
dotenv.config();
//configuring port
const PORT = process.env.PORT || 3000;

// Connection to MongoDB
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

//middleware
app.use(express.json());

// Routes
app.use('/auth/register', registerRoute);
app.use('/auth/login', loginRoute);

// Port connection
app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));






