const db = require('./database');
const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const bodyParser = require('body-parser');
const { register } = require('module');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('Views'));
app.use(express.static('Views/css'));
app.use(express.static('Views/Img'));
app.set("view engine","ejs");


app.get("/", (req,res)=>{
    res.render("Home");
})
app.get("/Home", (req,res)=>{
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
app.post('/login', (req, res) => {
  var namee = req.body.name;
  var idd = req.body.id;
  var passwordd = req.body.password;
  var sql = "INSERT INTO student(moodle_id,name,password) VALUES('" + idd + "','" + namee + "','" + passwordd + "')";
  db.query(sql,function (err, result) {
      res.render('register');
  });
});

app.listen(port,()=>{
  console.log(`listening on port ${port}`)
});
