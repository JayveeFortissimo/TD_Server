import mysql from 'mysql2/promise';

// Create a connection pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "todoapp",
  waitForConnections: true,
  connectionLimit: 10, // Limits concurrent connections
  queueLimit: 0
});

// Check the connection
async function checkDBConnection() {
  try {
    const connection = await db.getConnection();
    console.log("✅ SQL SUCCESSFULLY CONNECTED!");
    connection.release(); // Release connection back to the pool
  } catch (error) {
    console.error("❌ SQL CONNECTION FAILED:", error.message);
  }
}

// Run connection test
checkDBConnection();

export default db;
