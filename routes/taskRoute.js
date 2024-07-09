const express = require('express')
const router = express.Router()
const TaskData = require('../data/taskData')
const { getAllTaskData , addNewTaskData } = require('../controllers/taskController')

// router.get('/',(request,response)=>{
//     response.status(200).json(TaskData)
// })

router.get('/getTaskData',getAllTaskData)
router.post('/addTaskData',addNewTaskData)
module.exports = router
