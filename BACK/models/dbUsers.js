var pool = require('./db');
var md5 = require('md5');

async function dbGetUser(usr, psw){
    try {
        var sql = "SELECT * FROM users WHERE nombre = ? AND psw = ?";
        var row = await pool.query(sql, [usr, md5(psw)]);
        return row[0];
    } catch(err) {
        console.log(err)
    }
}

module.exports = {dbGetUser}