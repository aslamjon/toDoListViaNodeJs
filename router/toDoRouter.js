const { Router } = require('express');
const { getToDos} = require('../controller/toDoController');
const router = Router();

router.get('/', getToDos);




module.exports = {
    toDoRouter: router
}