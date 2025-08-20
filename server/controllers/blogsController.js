import Sequelize from "sequelize";
import router from "./routes/blogRoutes.js";
import connection from "./config/connection.js";
import express from "express";

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/", async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.status(200).json(newBlog);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating blog!")
    }
});

router.get("/", async (req, res) => {
    try {
        const allBlogs = await Blog.findAll();
        res.status(200).json(allBlogs);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving the blog!");
    }
});