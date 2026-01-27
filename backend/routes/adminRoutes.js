const express = require('express')
const router = express.Router()
const { AdminRegister, login } = require('../controllers/adminController')
router.post('/register', AdminRegister)
router.post('/login', login)
module.exports = router
