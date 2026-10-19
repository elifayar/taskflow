const express = require('express');
const task_Routes = require('./routes/tasks');
const logger_Middleware = require('./middlewares/logger');

const task_App = express();

task_App.use(express.json());
task_App.use(logger_Middleware);

task_App.get('/', (request, response) =>
{
    response.send('working!');
});

task_App.use('/tasks', task_Routes);

task_App.listen(3000, () =>
{
    console.log('started!');
});