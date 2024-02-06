import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "../TodoApp.css";

interface Todo {
  text: string;
  done: boolean;
}

interface ApiResponse<T> {
  data: T;
}

const TodoApp = (): JSX.Element => {
  const todoInputRef = useRef(null);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSubmitTodo = () => {
    const submitedText = (todoInputRef.current as unknown as HTMLInputElement)
      ?.value;
    const newTodo = { text: submitedText, done: false };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const fetchTodos = (): void => {
    axios
      .get<ApiResponse<Todo[]>>("/srp-data.json")
      .then((response) => response.data.data)
      .then((response) => setTodos(response))
      .catch((err) => console.log("Error fetching TODOS: ", err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <h1>Bad todo</h1>
      {isLoading && <h4>Loading....</h4>}
      {!isLoading && (
        <div>
          <div className="input-field">
            <input ref={todoInputRef} type="text" name="todo" id="todo-input" />
            <button onClick={handleSubmitTodo}>Add</button>
          </div>
          <h4>TODO LIST </h4>
          {todos.length > 0 ? (
            <ul className="todo-list">
              {todos.map((todo) => {
                return <li>{todo.text} </li>;
              })}
            </ul>
          ) : (
            <p>No todos</p>
          )}
        </div>
      )}
    </>
  );
};

export default TodoApp;
