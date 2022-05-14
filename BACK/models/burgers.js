var pool = require('./db');


async function getProds(cant){
    try {
        var sql = "SELECT * FROM burgers ORDER BY nombre DESC LIMIT 50";
        var row = await pool.query(sql);
        //console.log(row)
        return row;
        
    } catch(err) {
        console.log(err)
        
    }
    
}


async function getBurgers(){
    try {
        var sql = "SELECT * FROM burgers ORDER BY nombre DESC LIMIT 50";
        var row = await pool.query(sql);
        return row;
        
    } catch(err) {
        console.log(err)
        
    }
    
}

async function sendBurgers(obj){
    try {
        var sql = "INSERT INTO burgers SET ?";
        var row = await pool.query(sql, [obj]);
        return row;
        
    } catch(err) {
        console.log(err)
        throw err;
    }
    
}

async function delBurgers(id){
    try {
        var sql = "DELETE FROM burgers WHERE id = ?";
        var row = await pool.query(sql, [id]);
        return row;
        
    } catch(err) {
        console.log(err)
        throw err;
    }
    
}

async function editBurgers(obj, id){
    try {
        var sql = "UPDATE burgers SET ? WHERE id = ?";
        var row = await pool.query(sql, [obj, id]);
        return row;
        
    } catch(err) {
        console.log(err)
        throw err;
    }
    
}

async function editBurgersGetInfo(id){
    try {
        var sql = "SELECT * FROM burgers WHERE id = ?";
        var row = await pool.query(sql, [id]);
        return row[0];
        
    } catch(err) {
        console.log(err)
        throw err;
    }
    
}

module.exports = {getBurgers, sendBurgers, delBurgers, editBurgers, editBurgersGetInfo, getProds}

