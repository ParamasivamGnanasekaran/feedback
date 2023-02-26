const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'paramesh@123',
    database: 'approvalapp'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("MySql Connected");
    let sql = "CREATE TABLE users (id int NOT NULL AUTO_INCREMENT, username varchar(255)  NOT NULL, email varchar(255)  NOT NULL, password varchar(255) NOT NULL, role varchar(255) NOT NULL, team_name varchar(255), manager_name varchar(255), register datetime NOT NULL, last_login datetime, PRIMARY KEY (ID) )";
    connection.query(sql, function (err, result) {
        if (err) {
            if (err.code === 'ER_TABLE_EXISTS_ERROR') {
                console.log("Table already created");
                return
            } else {
                throw err;
            }
        }
        console.log("Table created");
    });
});

module.exports = connection;