const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '23.29.125.110',
    user: 'vip',
    database: 'vip',
    password: 'Vip@2020'
});

module.exports = pool.promise();