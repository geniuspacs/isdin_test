import { Todo, TodoParameters } from "./todo.entity";

describe("Todo Domain Entity", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("constructor", () => {
    it("should create an instance of Todo entity", () => {
      const params: TodoParameters = {
        id: "xxxx-xxxx-xxxx-xxxx",
        name: "Dummy name",
        description: "Dummy description",
        active: true,
      };

      expect(() => {
        new Todo(params);
      }).not.toThrowError();
    });
  });
});
