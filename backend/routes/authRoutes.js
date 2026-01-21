const express = require('express')
const router=express.Router()// built in function to use the router

const {register,login} = require('../controllers/authControllers')
router.post('/register',register)
router.post('/login',login)

module.exports=router