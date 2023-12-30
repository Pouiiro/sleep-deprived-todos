import { FormEvent, useCallback, useContext, useRef, useState } from "react";

import {
  Button,
  Input,
  TodoTitle,
  TodoWrapper,
  Wrapper,
} from "@/components/todo/elements";
import { TodosContext } from "@/contexts/contexts";

export const Todos = () => {
  const { todos, addTodo, clearTodos, removeTodo, markAsDone } =
    useContext(TodosContext);
  const [disabled, setDisabled] = useState(true);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAdd = useCallback(() => {
    if (inputRef.current?.value) {
      addTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  }, [addTodo]);

  const handleChange = useCallback((event: FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, []);

  return (
    <Wrapper>
      {todos.map((todo) => (
        <TodoWrapper key={todo.id}>
          <div className="checkbox-wrapper-60">
            <input
              type="checkbox"
              className="check"
              checked={todo.isDone}
              onChange={() => markAsDone(todo.id)}
              id={todo.id}
            />
            <label htmlFor={todo.id} className="label">
              <svg viewBox="0 0 65 65" height="30" width="30">
                <rect
                  x="7"
                  y="7"
                  width="50"
                  height="50"
                  stroke="white"
                  fill="none"
                />
                <g transform="translate(-23,-967.36216)" id="layer1-60">
                  <path
                    id="path4146"
                    d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    className="path1"
                  />
                </g>
              </svg>
              <TodoTitle checked={todo.isDone}>{todo.name}</TodoTitle>
            </label>
          </div>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </TodoWrapper>
      ))}
      {/* uncontrolled input */}
      <Input
        type="text"
        placeholder="todo"
        ref={inputRef}
        onChange={handleChange}
      />
      <Button onClick={handleAdd} disabled={disabled}>
        Add todo
      </Button>
      <Button onClick={clearTodos} disabled={todos.length === 0}>
        Remove todos
      </Button>
    </Wrapper>
  );
};
