// if you want to use this syntax, then you HAVE to declare "type": "module" in the package.json,
// otherwise you have to use `require` instead of import
import express from "express";
// const express = require("express"); This is the require syntax; it's the same thing
import noteRoutes from "./routes/noteRoutes.js";

// initialize an instance of Express.js
const app = express();

app.use("/api/notes", noteRoutes);

app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
  console.log("localhost:5001/api/notes");
});
