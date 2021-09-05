const { Router } = require('express');
const { getToDos, getToDo } = require('../controller/toDoController');
const router = Router();

router.get('/', getToDos);
router.get('/:id', getToDo);




module.exports = {
    toDoRouter: router
}