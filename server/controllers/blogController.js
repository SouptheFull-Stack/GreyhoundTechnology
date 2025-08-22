import { fetchBlog } from "../models/blog.js";


export async function getBlog(req, res) {
    try {
        const blogs = await fetchBlog();
        res.status(200).json(blogs);
    } catch (err) {
        console.error("Error creating blog article!", err);
        res.status(500).json({ error: err.message })
    }
}