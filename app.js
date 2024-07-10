const express = require('express');
const bodyParser = require('body-parser');

const taskRoutes = require('./routes/taskRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});