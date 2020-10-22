const mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);   
} else {
    connection = mysql.createConnection({
        host: "sm9j2j5q6c8bpgyq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "zrn2xgdx7wpaay29",
        password: "nmhpe3hu89mrhvqw",
        database: "f2gqjerp3fjyrsq4"
    })
};

connection.connect();
module.exports = connection;