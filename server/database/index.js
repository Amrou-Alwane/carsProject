const mysql = require("mysql2");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) console.log("Error to connect to database", err);
  else console.log("Yaaay Database connected!!");
});

const getAll=(callback)=>{
    const sql='SELECT * FROM `cars`'
    connection.query(sql,(err,res)=>{
      callback(err,res)
    })
 }
const getOne=(name,callback)=>{
    const sql=`SELECT * FROM cars WHERE carName='${name}'`
    connection.query(sql,(err,res)=>{
      callback(err,res)
    })
}
const add=(car,callback)=>{
   const sql ="INSERT INTO `cars` SET ?"
    connection.query(sql,car,(err,res)=>{
        callback(err,res)
      })
}
const edit = (car, id, callback) => {
    const sql = `UPDATE cars SET ? WHERE id=${id}`;
    connection.query(sql, car, (err, res) => {
      callback(err, res);
    });
  };
  
const deleteCar=(id,callback)=>{
    const sql=`DELETE FROM cars WHERE id=${id}`
    connection.query(sql,(err,res)=>{
        callback(err,res)
      })

}
module.exports = {connection , getAll,getOne,add,edit ,deleteCar}