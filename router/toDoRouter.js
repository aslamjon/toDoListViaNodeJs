const { Router } = require('express');
const { getToDos, getToDo, createTodo } = require('../controller/toDoController');
const router = Router();

router.get('/', getToDos);
router.get('/:id', getToDo);
router.post('/', createTodo);




module.exports = {
    toDoRouter: router
}