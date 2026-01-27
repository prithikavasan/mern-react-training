const mongoose = require('mongoose')
const adminSchema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type: String
    }
})
module.exports=mongoose.model('Admin',adminSchema)