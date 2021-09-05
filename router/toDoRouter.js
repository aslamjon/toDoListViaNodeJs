const { Router } = require('express');
const { getToDos, getToDo, createTodo, updateTodo, deleteTodo } = require('../controller/toDoController');
const router = Router();

router.get('/', getToDos);
router.get('/:id', getToDo);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);



module.exports = {
    toDoRouter: router
}