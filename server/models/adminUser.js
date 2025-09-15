import pool from "../config/connection.js";

export async function insertNewAdminUser() {
     const insert = pool.query("INSERT INTO adminUser(username, first_name, last_name, bio) VALUES ($1, $2, $3, $4) RETURNING *",
          [username, first_name, last_name, bio] 
     );
     return insert.rows[0];
}

export async function fetchAllAdminUsers() {
     const allAdminUsers = await pool.query("SELECT * FROM adminUser");
     return allAdminUsers.rows;
}

export async function fetchOneAdminUser(id) {
     const oneAdminUser = await pool.query("SELECT * FROM adminUser WHERE id = $1",
          [id]
     );
     return oneAdminUser.rows[0];
}