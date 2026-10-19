const express = require('express');

const task_Router = express.Router();

let task_List = [];
let current_Id = 1;

task_Router.get('/', (request, response) =>
{
    response.json(task_List);
});

task_Router.get('/:id', (request, response) =>
{
    const task_Id = parseInt(request.params.id);

    const found_Task = task_List.find(task => task.id === task_Id);

    if (!found_Task)
    {
        return response.status(404).json(
        {
            message: 'not found!!!'
        });
    }

    response.json(found_Task);
});

task_Router.post('/', (request, response) =>
{
    const task_Title = request.body.title;
    const task_Description = request.body.description;
    const task_Priority = request.body.priority;
    const task_Assignee = request.body.assignee;
    const task_Status = request.body.status;

    if (!task_Title || !task_Description || !task_Priority || !task_Assignee || !task_Status)
    {
        return response.status(400).json(
        {
            message: 'fill all!!!'
        });
    }

    const new_Task =
    {
        id: current_Id,
        title: task_Title,
        description: task_Description,
        priority: task_Priority,
        assignee: task_Assignee,
        status: task_Status
    };

    current_Id++;

    task_List.push(new_Task);

    response.status(201).json(new_Task);
});

task_Router.put('/:id', (request, response) =>
{
    const task_Id = parseInt(request.params.id);

    const found_Task = task_List.find(task => task.id === task_Id);

    if (!found_Task)
    {
        return response.status(404).json(
        {
            message: 'not found!!!'
        });
    }

    const task_Title = request.body.title;
    const task_Description = request.body.description;
    const task_Priority = request.body.priority;
    const task_Assignee = request.body.assignee;
    const task_Status = request.body.status;

    if (!task_Title || !task_Description || !task_Priority || !task_Assignee || !task_Status)
    {
        return response.status(400).json(
        {
            message: 'fill all!'
        });
    }

    found_Task.title = task_Title;
    found_Task.description = task_Description;
    found_Task.priority = task_Priority;
    found_Task.assignee = task_Assignee;
    found_Task.status = task_Status;

    response.json(found_Task);
});

task_Router.delete('/:id', (request, response) =>
{
    const task_Id = parseInt(request.params.id);

    const task_Index = task_List.findIndex(task => task.id === task_Id);

    if (task_Index === -1)
    {
        return response.status(404).json(
        {
            message: 'not found!!!'
        });
    }

    task_List.splice(task_Index, 1);

    response.json(
    {
        message: 'deleted!'
    });
});

module.exports = task_Router;