import pool from "../config/connection.js";

export async function fetchBlog() {
    const allBlogs = await pool.query("SELECT * FROM blog");
    return allBlogs.rows;
}