// Create an adapter that implements the repository pattern
// Use local variable to store values

import { Todo } from "../../domain/todo.entity";
import { TodoRepositoryPort } from "../../domain/todo.repository-port";

export class TodoInMemoryRepositoryAdapter implements TodoRepositoryPort {

  public todos: Todo[] = [];

  // TODO:
  constructor() {}

  findByName(name: string): Promise<Todo | undefined> {
    return new Promise((resolve) => {
      const todoFounded = this.todos.find((todo: Todo) => todo.name === name);
      resolve(todoFounded);
    });
  }

  // DONE: implement repository port.
  findById(id: string): Promise<Todo> {
    return new Promise((resolve, reject) => {
      const todoFounded = this.todos.find((todo: Todo) => todo.id === id);
      if(!todoFounded) {
        reject(`Todo with id ${id} not founded`);
      } else {
        resolve(todoFounded);
      }
    });
  }

  save(entity: Todo): Promise<Todo> {
    return new Promise(async (resolve, reject) => {
      if(entity.id) {
        const index = this.todos.findIndex(({id}) => id === entity.id);

        if(index < 0) {
          reject(`Todo with id ${entity.id} not founded`);
        }

        this.todos[index] = entity;
      } else {
        this.todos.push({
          ...entity,
          id: entity.id || (this.todos.length + 1).toString()
        });
      }
      
      resolve(entity);
    });
  }

  delete(id: string): Promise<void> {
    return new Promise((resolve) => {
      const todoIndex = this.todos.findIndex((todo: Todo) => todo.id === id);
      if(todoIndex >= 0) {
        this.todos.splice(todoIndex, 1);
      }
      resolve();
    });
    
  }
}
