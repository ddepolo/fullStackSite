var pool = require('./db');


async function getEmpleados(){
    try {
        var sql = "SELECT * FROM empleados ORDER BY nombre DESC LIMIT 50";
        var row = await pool.query(sql);
        return row;
        
    } catch(err) {
        console.log(err)
        
    }
    
}

async function sendEmpleados(obj){
    try {
        var sql = "INSERT INTO empleados SET ?";
        var row = await pool.query(sql, [obj]);
        return row;
        
    } catch(err) {
        console.log(err)
        throw err;
    }
    
}

async function delEmpleados(id){
    try {
        var sql = "DELETE FROM empleados WHERE id = ?";
        var row = await pool.query(sql, [id]);
        return row;
        
    } catch(err) {
        console.log(err)
        throw err;
    }
    
}

async function editEmpleados(obj, id){
    try {
        var sql = "UPDATE empleados SET ? WHERE id = ?";
        var row = await pool.query(sql, [obj, id]);
        return row;
        
    } catch(err) {
        console.log(err)
        throw err;
    }
    
}

async function editEmpleadosGetInfo(id){
    try {
        var sql = "SELECT * FROM empleados WHERE id = ?";
        var row = await pool.query(sql, [id]);
        return row[0];
        
    } catch(err) {
        console.log(err)
        throw err;
    }
    
}

module.exports = {getEmpleados, sendEmpleados, delEmpleados, editEmpleados, editEmpleadosGetInfo}