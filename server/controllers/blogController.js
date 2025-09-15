// This will hold the logic of the middleware and request/error handling;
// how the server will handle the requests, and how it's able to parse data
import { insertNewBlog, fetchAllBlogs, fetchOneBlog } from "../models/blog.js";


export async function getAllBlogs(req, res) {
    try {
        const blogs = await fetchAllBlogs();
        res.status(200).json(blogs);
    } catch (err) {
        console.error("Error getting blog article!", err);
        res.status(500).json({ error: err.message });
    }
}

export async function createBlog(req, res) {
    try {
        const newBlog = await insertNewBlog(req.body);
        console.log(req.body);
        res.status(200).json(newBlog);
    } catch (err) {
        console.error("Error creating blog article!", err);
        res.status(500).json({ error: err.message });
    }
}

export async function getBlogById(req, res) {
    try {
        const oneBlog = await fetchOneBlog(req.params.id);
        res.status(200).json(oneBlog);
    } catch (err) {
        console.error("Error getting blog!", err);
        res.status(500).json({ error: err.message });
    }
}

// TODO: update blog

// TODO: delete blog