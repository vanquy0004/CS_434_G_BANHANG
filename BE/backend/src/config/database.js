import { Pool } from "pg";

const pool = new Pool({
  user: "nguyendv",       // username pgAdmin của bạn
  host: "localhost",      // host db
  database: "Lego-market",  // tên database vừa tạo
  port: 5432,             // port mặc định PostgreSQL
});

pool.connect()
  .then(() => console.log("Kết nối thành công đến PostgreSQL"))
  .catch((err) => console.error("Kết nối thất bại!", err.stack));

export default pool;
