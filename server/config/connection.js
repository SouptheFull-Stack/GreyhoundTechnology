import { Pool } from "pg";

const pool = new Pool(
  {
    user: '',
    password: '',
    host: 'localhost',
    database: 'greyhound_technology_db'
  }
)

pool.on("connect", () => {
  console.log("Connection pool established with database");
});

pool.on("error", () => {
  console.log("Connection pool error has occurred!")
})

export default pool;