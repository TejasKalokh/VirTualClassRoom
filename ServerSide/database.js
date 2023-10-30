// const {
//     createPool
// } = require('mysql');

// const pool = createPool({
//     host: "localhost",
//     user: 'root',
//     password: "",
//     database: "test",
//     connectionLimit : 10
// })

// pool.query(`selet * from registration`, (err, result, fields) => {
//     if (err) {
//         return console.log(err);
//     }
//     return console.log(result);
// })
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: '',
    user: 'root',
    password: 'root'
});