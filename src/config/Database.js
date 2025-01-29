import MySql from 'mysql2';


const Connection = MySql.createConnection({
     host:"localhost",
     user:"root",
     password:"",
     database:"todoapp"
});


 Connection? console.log("SQL SUCCESSFULLY CONNECTED! ") : console.log("SQL CONNECTED")

export default Connection;
