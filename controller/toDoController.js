const ToDo = require('../model/toDoModel');
const uuid = require('uuid')

async function getToDos(req, res) {
    try {
        const todos = await ToDo.toDos();
        res.send(todos)
    } catch (error) {
        console.log(error);
    }
}

async function getToDo(req, res) {
    try {
        const {id} = req.params;
        const todo = await ToDo.toDoById(id);
        if (!todo) res.status(404).send({ message: "ToDo not fount" })
        else res.send(todo)
    } catch (error) {
        console.log(error);
    }
}

async function createTodo(req, res) {
    const {title, description, status, createdAt, priority} = req.body;
    const newTodo = {
        id: uuid.v4(),
        title, 
        description, 
        status, 
        createdAt, 
        priority
    }
    try {
        const forSend = await ToDo.createTodo(newTodo)
        res.send(forSend)
    } catch (error) {
        console.log(error);
    }
}

async function updateTodo(req, res) {
    const {id} = req.params;
    
    const find = await ToDo.updateTodo(id, req.body);
    if (!find) res.status(404).send({ message: "ToDo not found" });
    else res.send(find);
}

async function deleteTodo(req, res) {
    const { id } = req.params;

    const del = await ToDo.deleteTodo(id);
    if (!del) res.status(404).send({ message: "Todo not found" });
    res.send({ message: "Todo has been deleted"})
}

module.exports = {
    getToDos,
    getToDo,
    createTodo,
    updateTodo,
    deleteTodo
}