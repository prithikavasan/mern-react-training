const express = require('express')
const router = express.Router()
const { StudRegister, login } = require('../controllers/studController')
router.post('/register', StudRegister)
router.post('/login', login)

module.exports = router
