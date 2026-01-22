const jwt = require('jsonwebtoken')

exports.protect = (req,res,next) => { //next is used in middleware for next user
    let token = req.headers.authorization // accessing the token
    if(!token || !token.startsWith('Bearer')){ // if the token is not present or it does'nt start with "bearer" ->error
        return res.status(401).json({msg:"Not authorized"}) 
        //headers:{
        //   authorization: Bearer <token> 
        //}

    }
    try{
        token=token.split(" ")[1];     //the token is split by space into an array so it is stored in the index ->1 if you 
        const decoded = jwt.verify(token, process.env.JWT_SECRET)//to verify the token is correct
    
        req.user=decoded
        next()//if we call the next here it move to the next middleware or move to the  next routes
         // decoded now has the user info if we want to access it can use, (req.user.id ) like that we can access
    }
    catch(err){
       return res.send("Invalid token")
    }
}  