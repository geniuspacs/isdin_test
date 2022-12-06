import { Todo } from "../domain/todo.entity";
import { CreateTodoUseCase } from "./create-todo.use-case";

describe("CreateTodoUseCase", () => {

  let createTodo: CreateTodoUseCase;
  let newTodo: Todo;

  beforeEach(() => {
    createTodo = new CreateTodoUseCase();
    newTodo = {
      id: '1',
      active: true,
      description: 'MyDescription',
      name: 'MyName'
    }
    jest.resetAllMocks();
  });

  describe("execute", () => {
    it("Fail when todo with same name exists and is not an edition (not have id)", async() => {
      createTodo.todos = [newTodo];
      expect.assertions(1);
      try {
        await createTodo.execute({
          todo: {...newTodo, id: undefined}
        });
      } catch (error) {
        expect(error).toBe(`Todo with name ${newTodo.name} is duplicated`)
      }
    });

    it("Fail when adapter dispatch an error", async() => {
      createTodo.findByName = jest.fn().mockRejectedValue(new Error('Error on findByName'))
      expect.assertions(1);
      try {
        await createTodo.execute({
          todo: newTodo
        });
      } catch (error) {
        expect(error).toEqual(new Error('Error on findByName'))
      }
    });

    it("Save todo when everything is ok", async() => {
      expect(createTodo.todos.length).toBe(0);
      await createTodo.execute({
        todo: {
          ...newTodo,
          id: undefined
        }
      });
      expect(createTodo.todos.length).toBe(1);
    });

    it("Edit todo when todo exists", async() => {
      createTodo.todos = [newTodo];
      expect(createTodo.todos.length).toBe(1);
      await createTodo.execute({
        todo: {
          ...newTodo,
          name: 'newTodoAgain!'
        }
      });
      expect(createTodo.todos.length).toBe(1);
      expect(createTodo.todos[0].name).toBe('newTodoAgain!');
    });
  });
});
