const TaskData = require('../data/taskData')
const getAllTaskData=(request,response)=>{
    response.status(200).json(TaskData)
}

const addNewTaskData = (request,response)=>{
    const{id}=request.body
    TaskData.map(iterator=>{
        if(iterator.id == id)
        {
            return response.status(409).json({message: 'Duplicate data :('})
        }
    })
    console.log("Post method Called");
    console.log(request.body);
    TaskData.push(request.body)
    return response.status(201).json({message: 'Added Successfully'})

}
module.exports={getAllTaskData , addNewTaskData}