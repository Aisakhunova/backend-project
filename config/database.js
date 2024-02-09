// Import the mysql module
const { Pool } = require('pg');

// const con = new Pool({
//     // connectionString: "postgres://chess_leader_school_postgresql_user:NPPlmZqXBwtNuxeitttW2LL0Ib4HgUjE@dpg-cmvoifev3ddc73btrolg-a.singapore-postgres.render.com/chess_leader_school_postgresql",
//     // ssl: false
//     user: 'chess_leader_school_postgresql_user',
//     host: 'dpg-cmvoifev3ddc73btrolg-a',
//     database: 'chess_leader_school_postgresql',
//     password: 'NPPlmZqXBwtNuxeitttW2LL0Ib4HgUjE',
//     port: 5432, // Default PostgreSQL port
// });

const con = new Pool({
    // connectionString: "postgres://chess_leader_school_postgresql_user:NPPlmZqXBwtNuxeitttW2LL0Ib4HgUjE@dpg-cmvoifev3ddc73btrolg-a.singapore-postgres.render.com/chess_leader_school_postgresql",
    // ssl: false
    user: 'kama',
    host: 'localhost',
    database: 'testing',
    password: 'Aben2311T',
    port: 5432, // Default PostgreSQL port
});

// Export the connection pool
module.exports = con;

// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "hacker",
//     password: "password",
//     database: "testing"
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected to MySQL database");
// });

// module.exports = con;
