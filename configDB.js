const DB = require("mysql");
const CONN = DB.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'faeterj',
    database: 'faeterjdb'
});

CONN.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connectou");
    }
});

module.exports = CONN; 