import "../TodoApp.css";
import useTodo from "./hooks/useTodo";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const TodoApp = (): JSX.Element => {
  const { todos, isLoading, addTodo } = useTodo();

  const handleNewTodoSubmit = (todo: string) => {
    addTodo(todo)
  }


  return (
    <>
      <h2>Good todo</h2>
      {isLoading && <h4>Loading....</h4>}
      {!isLoading && (
        <div>
          <TodoInput onSubmit={handleNewTodoSubmit}/>
          <TodoList list={todos} />
        </div>
      )}
    </>
  );
};

export default TodoApp;
