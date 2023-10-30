const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

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

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
