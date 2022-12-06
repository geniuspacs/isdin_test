# README

This README contains the necessary documentation to achieve the test.

### Project structure

Our code is organized in 4 layers:

- Todo/Domain
  -- Domain entities & entities repository ports
- Todo/Use cases
  -- Application use-cases
- Todo/Infrastructure
  -- Adapters (implementations) of the different interfaces
- Todo/Presentation
  -- Representation of the use cases (how they are shown)

### Project objective

This project has the objective of understanding the knowledge of the candidate in terms of DDD, testing & basic POO notions.

The challenge of the code is to implement "create-todo-use" in all our layers.
Each layer should have its own entities/dto/orm/odm.
Each layer should have unit tests.

### How do I get set up?

- Node version: v16.14.2
- Install dependencies: "npm ci"
- Run application: "npm run start"
- Run tests: "npm run test"
