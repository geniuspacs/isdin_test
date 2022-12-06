import { Todo } from "../../domain/todo.entity";
import { TodoInMemoryRepositoryAdapter } from "./todo.in-memory.repository-adapter";

describe("TodoInMemoryRepositoryAdapter", () => {

  let adapter: TodoInMemoryRepositoryAdapter;

  beforeEach(() => {
    adapter = new TodoInMemoryRepositoryAdapter();
    jest.resetAllMocks();
  });

  describe("methods", () => {
    let newTodo: Todo;

    beforeEach(() => {
      newTodo = {
        active: true,
        description: 'Description',
        name: 'My name',
        id: '1'
      };
    });

    describe("findByName", () => {
      it("should throw an error when repository adapter fails", async () => {
        adapter.findByName = jest.fn().mockRejectedValue(new Error('Error'))
        expect.assertions(1);
        try {
          await adapter.findByName('My name');
        } catch (error) {
          expect(error).toEqual(new Error('Error'))
        }
      });

      it("should return the TODO entity", async () => {
        adapter.todos = [newTodo];

        const result = await adapter.findByName('My name');

        expect(result).toBe(newTodo);
      });
    });

    describe("findById", () => {
      it("should throw an error when repository adapter fails", async () => {
        adapter.findById = jest.fn().mockRejectedValue(new Error('Error'))
        expect.assertions(1);
        try {
          await adapter.findById('1');
        } catch (error) {
          expect(error).toEqual(new Error('Error'))
        }
      });

      it("should return the TODO entity", async () => {
        adapter.todos = [newTodo];

        const result = await adapter.findById('1');

        expect(result).toBe(newTodo);
      });
    });

    describe("save", () => {
      it("should throw an error when repository adapter fails", async () => {
        adapter.save = jest.fn().mockRejectedValue(new Error('Error'))
        expect.assertions(1);
        try {
          await adapter.save(newTodo);
        } catch (error) {
          expect(error).toEqual(new Error('Error'))
        }
      });

      it("should save the TODO entity", async () => {
        expect(adapter.todos.length).toBe(0);
        await adapter.save({
          ...newTodo,
          id: undefined
        });
        expect(adapter.todos.length).toBe(1);
      });
    });

    describe("delete", () => {
      it("should throw an error when repository adapter fails", async () => {
        adapter.delete = jest.fn().mockRejectedValue(new Error('Error'))
        expect.assertions(1);
        try {
          await adapter.delete('1');
        } catch (error) {
          expect(error).toEqual(new Error('Error'))
        }
      });

      it("should delete the TODO entity", async() => {
        adapter.todos = [newTodo];
        expect(adapter.todos.includes(newTodo)).toBeTruthy();
        await adapter.delete(newTodo.id!);
        expect(adapter.todos.includes(newTodo)).toBeFalsy();
      });
    });
  });
});
