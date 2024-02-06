import { useRef } from "react";
import "../TodoApp.css";
import useTodo from "./hooks/useTodo";
import TodoList from "./components/TodoList";

const TodoApp = (): JSX.Element => {
  const todoInputRef = useRef(null);
  const { todos, isLoading, addTodo } = useTodo();

  const handleSubmitTodo = () => {
    const submitedText = (todoInputRef.current as unknown as HTMLInputElement)
      ?.value;
    addTodo(submitedText);
  };

  return (
    <>
      <h2>Good todo</h2>
      {isLoading && <h4>Loading....</h4>}
      {!isLoading && (
        <div>
          <div className="input-field">
            <input ref={todoInputRef} type="text" name="todo" id="todo-input" />
            <button onClick={handleSubmitTodo}>Add</button>
          </div>
          <TodoList list={todos} />
        </div>
      )}
    </>
  );
};

export default TodoApp;
