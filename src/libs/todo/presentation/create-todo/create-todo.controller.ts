import express from "express";
import { Todo } from "../../domain/todo.entity";
import { CreateTodoUseCase } from "../../use-case";
import { CreateTodoDto } from "./create-todo.dto";

const router = express.Router();

export class CreateTodoController extends CreateTodoUseCase {
  // DONE: Instantiate create-todo use-case
  constructor() {
    super();
  }

  public async createTodo(todo: CreateTodoDto): Promise<Todo> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.execute({todo});
        resolve(result.todo);
      } catch (error) {
        reject(error);
      }
    });
  }
}
