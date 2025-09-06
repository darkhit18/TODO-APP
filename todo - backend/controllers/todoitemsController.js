const TodoItem = require("../models/TodoItem");

exports.createTodoItem = async (req, res) => {
  console.log(req.body); // Log the request body to see what is being received
  const { task, date } = req.body;
  const newTodoItem = new TodoItem({ task, date });
  await newTodoItem.save();
  res.status(201).json(newTodoItem);
};

exports.getTodoItem = async (req, res) => {
  const todoItems = await TodoItem.find();
  res.json(todoItems);
};

exports.deleteTodoItem = async (req, res) => {
  const { id } = req.params;
  await TodoItem.findByIdAndDelete(id);
  res.status(204).json({_id: id});
}

exports.markItemAsCompleted = async (req, res) => {
  const { id } = req.params;
  const updatedItem = await TodoItem.findById(id);
  updatedItem.completed = true;
  await updatedItem.save();
  res.json(updatedItem);
}
