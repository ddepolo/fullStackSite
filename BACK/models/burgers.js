var pool = require('./db');


async function getProds(cant){
    try {
        var sql = "SELECT * FROM burgers ORDER BY nombre DESC LIMIT 50";
        var row = await pool.query(sql);
        console.log(row)
        return row;
        
    } catch(err) {
        console.log(err)
        
    }
    
}





module.exports = {getProds}