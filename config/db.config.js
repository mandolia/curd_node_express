require('dotenv').config();

const mysql = require('mysql');
const dbconn = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
})

dbconn.connect(function(error){
    if(error) throw error;
    console.log('database connected!!');
});

module.exports = dbconn;