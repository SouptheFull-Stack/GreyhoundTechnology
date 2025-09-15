// This will model out the PostgreSQL queries in exported functions
// but does not contain any error handling or middleware 
import pool from "../config/connection.js";
// import dataValidation from "../utils/controllerHelpers.js"; 

export async function insertNewBlog(title, author_id, content, category_id) {
    const insert = await pool.query("INSERT INTO blog(title, author_id, content) VALUES ($1, $2, $3) RETURNING *", 
        [title, author_id, content]
    );
    
    return insert.rows[0];
}

export async function fetchAllBlogs() {
    const allBlogs = await pool.query("SELECT * FROM blog");
    return allBlogs.rows;
}

export async function fetchOneBlog(id) {
    const oneBlog = await pool.query("SELECT * FROM blog WHERE id = $1",
        [id]
    );
    return oneBlog.rows[0];
}




