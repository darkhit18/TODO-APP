//External modules
const express = require('express');
const todoitemsRouter = express.Router(); 

//local modules
const todoitemsController = require('../controllers/todoitemsController');

todoitemsRouter.get("/", todoitemsController.getTodoItem);
todoitemsRouter.post("/", todoitemsController.createTodoItem); 
todoitemsRouter.delete("/:id", todoitemsController.deleteTodoItem);
todoitemsRouter.put("/:id/completed", todoitemsController.markItemAsCompleted);


module.exports = todoitemsRouter;