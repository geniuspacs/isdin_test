import express from "express";
import { CreateTodoController } from "./create-todo";

const todoRouter = express.Router();

const controller = new CreateTodoController();

todoRouter.post("/create-todo", (req, res) => {
  
  controller.createTodo(req.body)
  .then((response) => res.status(200).send(response))
  .catch((error) => {
    res.status(400).send(error)
  })
});

export { todoRouter };
