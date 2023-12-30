import { Todo } from "@/types";
import { createContext } from "react";

export type TodosContextProps = {
  readonly todos: ReadonlyArray<Todo>;
  readonly clearTodos: () => void;
  readonly addTodo: (todoName: string) => void;
  readonly markAsDone: (id: string) => void;
  readonly removeTodo: (id: string) => void;
};

const initialState = {
  todos: [],
  clearTodos: () => {},
  addTodo: () => {},
  markAsDone: () => {},
  removeTodo: () => {},
};

export const TodosContext = createContext<TodosContextProps>(initialState);
