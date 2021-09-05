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


module.exports = {
    toDos: getToDos,
    toDoById: getToDo,
    createTodo,
}