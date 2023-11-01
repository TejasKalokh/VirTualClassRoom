const express = require('express');
const mysql = require('mysql2/promise'); // Use 'mysql2/promise' for async/await support

const app = express();

// Define your MySQL database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'classroom'
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Middleware to attach the MySQL pool to the request object
app.use((req, res, next) => {
  req.pool = pool;
  next();
});

app.get('/example', async (req, res) => {
  try {
    const [rows, fields] = await req.pool.query('SELECT * FROM student');
    res.json(rows);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
