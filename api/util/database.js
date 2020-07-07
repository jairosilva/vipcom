const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'vip',
    password: ''
});

module.exports = pool.promise();
