const jwt=require('jsonwebtoken');
const dotenv = require("dotenv");
const User = require('../model/User');

const protect = async (req,res,next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token=req.headers.authorization.split(' ')[1];
            console.log('Token:',token);
            console.log("JWT_SECRET:", process.env.JWT_SECRET);
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Decoded',decoded);
           
            req.user = await User.findById(decoded.id).select('-password');
            console.log("User:", req.user);
            next();
        } 
        catch (error) {
            res.status(401).json({message:'Not authorized, token failed', error});
        }
    }
    if(!token){
        res.status(401).json({message:'Not authorized,No token'});
    }
    
};


module.exports={protect};