const jwt = require('jsonwebtoken');
const config = require('config');

//Decodes the token
module.exports = (req,res,next) => {
    //Get the token from the header
    const token = req.header('x-auth-token');

    //check if not token
    if(!token){
         return res.status(401).json({
             error: {msg:"No token, Authorization denied!"}
         });
    }
    try{   
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next();
    } catch (err){
        console.error(err);
        res.status(401).json({
            error:{msg: "Token is not valid!"}
        });
    }
}