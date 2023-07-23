var mysql = require('mysql');
const { parseFlagList } = require('mysql/lib/ConnectionConfig');

//buat koneksi database
const conn = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password : '',
    database : 'db_restapi',
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("Mysql terkoneksi");
});

module.exports=conn;