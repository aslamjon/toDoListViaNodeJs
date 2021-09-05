const express = require('express');
const app = express()
const { toDoRouter } = require('./router/toDoRouter')

app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true}))
app.use('/api/todo', toDoRouter)

app.listen(3000, () => console.log('Server is running'))