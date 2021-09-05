const { Router } = require('express');
const { getToDos, getToDo, createTodo, updateTodo } = require('../controller/toDoController');
const router = Router();

router.get('/', getToDos);
router.get('/:id', getToDo);
router.post('/', createTodo);
router.put('/:id', updateTodo);



module.exports = {
    toDoRouter: router
}