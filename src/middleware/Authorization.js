import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const verify = (req,res,next) =>{

    const authHeader = req.headers.authorization;
    if(authHeader){
        
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, user)=>{
            if(err){
                return res.status(403).json("Token is not valid");
            }

           req.user = user;
           next();
        });

    }else{
        res.status(401).json("You are not Authenticated!");
    }
};


export{
    verify,
};