const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Ravashu80@',
    database: 'shopsync'
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('MySQL connection failed: ' + err.message); // Add this to see the error
        return;
    }
    console.log('Connected to MySQL database.');
    connection.release();
});

module.exports = pool.promise();

