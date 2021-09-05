const uuid = require('uuid')
let todos = require('../data/data.json');
const { writeDataToDataBase } = require('../utils')


function getToDos() {
    return new Promise((resolve, reject) => {
        resolve(todos)
    })
}

function getToDo(id) {
    return new Promise((resolve, reject) => {
        let todo = todos.find(p => p.id == id)
        resolve(todo)
    })
}

function createTodo(todo) {
    return new Promise((resolve, reject) => {
        todos.push(todo);
        writeDataToDataBase('data/data.json', todos)
        resolve(todo);
    })
}

function updateTodo(id, todo) {
    return new Promise((resolve, reject) => {
        const findTodo = todos.findIndex(p => p.id == id);
        
        if (!todos[findTodo]) resolve(todos[findTodo]);
        else {
            const {title, description, status, createdAt, priority} = todo;
            const update = {
                id,
                title: title || todos[findTodo].title,
                description: description || todos[findTodo].description,
                status: status || todos[findTodo].status,
                createdAt: createdAt || todos[findTodo].createdAt,
                priority: priority || todos[findTodo].priority,
            }
            todos[findTodo] = update;
            writeDataToDataBase('./data/data.json', todos);
            resolve(todos[findTodo])
        }
    })
}


module.exports = {
    toDos: getToDos,
    toDoById: getToDo,
    createTodo,
    updateTodo,
}