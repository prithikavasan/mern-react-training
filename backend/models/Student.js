const mongoose = require('mongoose')
const studSchema=mongoose.Schema({
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
    },
    age:{
        type: Number,

    },
    department:{
        type: String,
    },
    isActive: {
        type: String,
        status: "Not active"
    }


})
module.exports=mongoose.model('Student',studSchema)