import { Todo } from "./todo.entity";

export interface TodoRepositoryPort {
  findById(id: string): Promise<Todo>;
  save(entity: Todo): Promise<Todo>;
  delete(id: string): Promise<void>;
}
