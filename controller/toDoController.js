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


module.exports = {
    getToDos,
}