export interface TodoParameters {
  id?: string;
  name: string;
  description: string;
  active: boolean;
}

export class Todo {
  public readonly id?: string;
  public readonly name: string;
  public readonly description: string;
  public readonly active: boolean;

  constructor(params: TodoParameters) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.active = params.active;
  }
}
