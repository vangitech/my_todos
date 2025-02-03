const express = require("express")
const { newTodo, updated_todo, delete_Todo, get_all_todos } = require("../controller/todoController")

const todoRoutes = express.Router()
todoRoutes.post("/add-todo/:userId" , newTodo)
todoRoutes.patch("/update/:todoId" , updated_todo)
todoRoutes.get("/get-all" , get_all_todos)
todoRoutes.delete("/remove/:todoId" , delete_Todo)



module.exports = todoRoutes