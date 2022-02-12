var mysql = require("mysql")

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nx_task"
});

module.exports = conn;
