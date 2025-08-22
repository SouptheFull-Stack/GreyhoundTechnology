import { Pool } from "pg";

const pool = new Pool(
  {
    user: '',
    password: '',
    host: 'localhost',
    database: 'greyhound_technology_db'
  },
  console.log("Connected to the database!")
)

export default pool;