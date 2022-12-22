import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'practica_auth',
  port: 3306
});

connection.connect((err)=>{
  if(err){
    console.log("Not connect database")
    return
  }
    console.log("Connect Database")
})