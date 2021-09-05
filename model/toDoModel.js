const uuid = require('uuid')
let todos = require('../data/data.json');
const { writeDataToDataBase } = require('../utils')


function getToDos() {
    return new Promise((resolve, reject) => {
        resolve(todos)
    })
}


module.exports = {
    toDos: getToDos,

}