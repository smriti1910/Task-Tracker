const express = require('express');
const app = express()
const PORT = 3500
app.use(express.json())
app.get('/',(request,response)=>{
    response.status(200).json({message:`Hello World!!`})
})

const routes = require('./routes/taskRoute');
app.use('/api/vi/task', routes);


app.listen(PORT,()=>{
    console.log(`Server started running at http://localhost:${PORT}/`);
})