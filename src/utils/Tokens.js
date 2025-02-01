import jwt from 'jsonwebtoken';

const AccessTokens = (findUsername) =>{
 const Token = jwt.sign({id: findUsername.id}, process.env.ACCESS_TOKEN,{expiresIn: '1h'});
return Token;
};

const RefreshToken = (findUsername) => {
    const RefreshToken = jwt.sign({id: findUsername.id}, process.env.ACCESS_TOKEN,{expiresIn: '1h'});
    return RefreshToken;
};

export{
    AccessTokens,
    RefreshToken
}