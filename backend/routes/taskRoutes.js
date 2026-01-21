const express = require('express')
const router = express.Router()

const {registerTask} = require('../controllers/taskControllers')

router.post('/registerTask',registerTask)
module.exports=router