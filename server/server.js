// if you want to use this syntax, then you HAVE to declare "type": "module" in the package.json,
// otherwise you have to use `require` instead of import
import express from "express";
// const express = require("express"); This is the require syntax; it's the same thing
import routes from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();

// initialise an instance of Express.js
const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Error handling middleware

// Testing Postgres connection

// Server running
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});

