import db from '../config/Database.js';
import bcrypt from 'bcrypt';
import Token from 'jsonwebtoken';

async function Register(req,res) {

    const {username, passwords} = req.body;

try{
      
      const query = `INSERT INTO users (userName, password) VALUES (?,?)`;
      const query2 = `SELECT * FROM users`;

      const hashedPassword = await bcrypt.hash(passwords, 10);

      const [result] = await db.promise().query(query2);

      const Validations = result.some((pro) =>{
        return username === pro.userName || passwords === pro.password
      });
      
       if(Validations) {
        res.json({message: "User is already exist!"});
       } else{
        const [result1] = await db.promise().query(query, [username,hashedPassword]);

        res.status(201).json({message:"Successfully Registered", results: result1})
       }
  
    
}catch(error) {
    res.status(500).json("Cannot register, have a problem")
};

}



async function Login(req,res){


const {username, password} = req.body;

try{

const query = "SELECT * FROM users";
const [result] = await db.promise().query(query);

const findUsername = result.find(pro => pro.userName === username);

if(findUsername){
 let credential = false

 for(let x of result){
    const seePassword = await bcrypt.compare(password,x.password);
    !seePassword? credential = false : credential = true;
 }

 if(!credential) return res.json({message: "Password is not corrected!"}); 
 return res.json({message: "WELCOME! "});

}else{
   res.json({message:"Credentials doesn't exist!", status:400})
}

}catch(error){
    console.log("NO DATA FOUND");
    res.json({message:"DATA NOT FOUND", status: 400})
}

}

export{ Register, Login }