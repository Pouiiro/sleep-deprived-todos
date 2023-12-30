import { ReactNode, useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { TodosContext } from "@/contexts/contexts";
import { Todo } from "@/types";

type TodosProviderProps = {
  children: ReactNode | ReactNode[];
};

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<ReadonlyArray<Todo>>([]);

  const clearTodos = useCallback(() => {
    setTodos([]);
    localStorage.removeItem("todos");
  }, []);
  const addTodo = useCallback(
    (todoName: string) => {
      const todo = {
        id: uuidv4(),
        name: todoName,
        isDone: false,
      };

      setTodos((previousTodos) => [...previousTodos, todo]);
      localStorage.setItem("todos", JSON.stringify([...todos, todo]));
    },
    [todos]
  );
  const markAsDone = useCallback(
    (id: string) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    },
    [todos]
  );
  const removeTodo = useCallback(
    (id: string) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    },
    [todos]
  );

  useEffect(() => {
    const todosString = localStorage.getItem("todos");
    if (todosString !== null) {
      const todos = JSON.parse(todosString) as Todo[];
      setTodos(todos);
    }
  }, []);

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, removeTodo, clearTodos, markAsDone }}
    >
      {children}
    </TodosContext.Provider>
  );
};
