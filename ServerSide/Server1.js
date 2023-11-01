const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const mysql = require('mysql2/promise'); // Use 'mysql2/promise' for async/await support


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


// app.use(express.static(path.join(__dirname, 'Views')));
// app.use(express.static(path.join(__dirname, 'Views/style.css')));
// app.use(express.static(path.join(__dirname, 'Views/Home.js')));
app.use(express.static('Views'));
app.use(express.static('Views/css'));
app.use(express.static('Views/Img'));
app.set("view engine","ejs");


app.get("/", (req,res)=>{
    res.render("Home");
})

app.get("/MainClass",(req,res)=>{
    res.render("MainClass");
})
app.get("/TodoList",(req,res)=>{
    res.render("TodoList");
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/Courses",(req,res)=>{
    res.render("Courses");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
