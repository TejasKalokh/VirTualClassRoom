const mysql = require('mysql');

const cnnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  
    password: "reoot123",
    database:'vrclassroom'
})

cnnection.connect(function (error) {
    if (error) {
        throw error;
    }
    else { console.log('connected to the database'); }
})