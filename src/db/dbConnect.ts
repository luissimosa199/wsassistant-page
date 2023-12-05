import { Pool } from "pg";

let dbConnect: Pool | undefined;

if (!dbConnect) {
  dbConnect = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: 5432,
    database: process.env.PGDATABASE,
    ssl: true,
  });
}

export default dbConnect;
