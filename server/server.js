// if you want to use this syntax, then you HAVE to declare "type": "module" in the package.json,
// otherwise you have to use `require` instead of import
import express from "express";
// const express = require("express"); This is the require syntax; it's the same thing
import blogRoutes from "./routes/blogRoutes.js";

// initialise an instance of Express.js
const app = express();

app.use("/api/blogs", blogRoutes);

app.listen(5001, () => {
  console.log("Server started on PORT: 5001 localhost:5001/api/blogs");
});
