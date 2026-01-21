const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../models/User')

exports.register=async(req,res)=>{
    const {name,email,password}=req.body
    const existingUser=await User.findOne({email})
    if(existingUser){
        res.status(400).json({message:"Email already exist"})
    }
    const hashedPassword=await bcrypt.hash(password,10) // 10 why used here is, this denotes the strong of the password which means 
                                                  // 2^10 this makes the password bcrypt and more stronger and less time
    const user=await User.create({
        name,
        email,
        password:hashedPassword
    })
    //when creating a new data the status code should be 201
    res.status(201).json({msg:"User created successfully"})//json for key value pairs
    // res.status(201).send({msg:"User created successfully"}) send can be used for text 
}
exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const existingUser = await  User.findOne({email})
        if(!existingUser){ // in this existing user whole document will be stored
            res.status(400).send("email not registered")
        }
        const isMatching=await bcrypt.compare(password, existingUser.password) //comapare is the bcrypt build in function
        if(!isMatching){
            res.status(400).send("Invalid credentials")
        }
        const token=jwt.sign(
            {id:existingUser._id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )

        res.send({token})
        res.status(200).send("Login successfull")
    }

    catch(error){
        res.status(500).send(error)
    }
}