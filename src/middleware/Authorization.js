import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();


const verify = (req,res,next) =>{
    
        const Token = req.cookies.token;
      
       if(!Token) return res.json("unauthorize");
 
        jwt.verify(Token, process.env.ACCESS_TOKEN, (err, user)=>{
            if(err) return res.status(403).json("Token is not valid");
        //!Purpose nito is ipapasa lang na tin yung decode na token
          req.user = user;
           next();
        });

     
};


export{ verify };