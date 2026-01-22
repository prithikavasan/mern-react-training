const express = require('express')
const router = express.Router()

const {registerTask, displayTask, getTaskById, updateTask, updateTaskPatch, deleteTask} = require('../controllers/taskControllers')
const {protect} = require('../middleware/authMiddleware')

router.post('/registerTask',protect, registerTask)
router.get('/displayTask',protect,displayTask)
router.get('/getTaskById/:id',protect,getTaskById)
router.put('/updateTask/:id',protect, updateTask)
router.patch('/updateTaskPatch/:id',protect, updateTaskPatch)
router.delete('/deleteTask/:id',protect, deleteTask)

module.exports=router