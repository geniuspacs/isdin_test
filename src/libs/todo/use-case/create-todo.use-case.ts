import { Todo } from "@isdin-todo-domain";
import { TodoInMemoryRepositoryAdapter } from "../infrastructure/storage/todo.in-memory.repository-adapter";
import { CreateTodoDto } from "../presentation";

// Given the class Dummy implement the create-dummy-use-case
// Validations:
// - If the name is duplicated throw error
// - If there is a repository problem throw error

export interface CreateTodoRequestModelUseCase {
  // DONE?:
  todo: Todo;
}

export interface CreateTodoResponseModelUseCase {
  todo: Todo;
}

export class CreateTodoUseCase extends TodoInMemoryRepositoryAdapter {
  // TODO:
  constructor() {
    super();
  }

  public async execute(
    request: CreateTodoRequestModelUseCase
  ): Promise<CreateTodoResponseModelUseCase> {
    return new Promise(async (resolve, reject) => {
      try {
        const todoFounded = await this.findByName(request.todo.name);
        if(todoFounded && !request.todo.id) {
          reject(`Todo with name ${request.todo.name} is duplicated`)
        }
        resolve({
          todo: await this.save(request.todo)
        })
      } catch (error) {
        reject(error)
      }
    });
  }
}
