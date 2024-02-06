import useTodo from "../hooks/useTodo";
import { Todo } from "../models/todos";

interface TodoListProps {
  list: Todo[];
}

const TodoList = ({ list }: TodoListProps): JSX.Element => {
  const { completeTodo } = useTodo();

  return (
    <div>
      <h4>TODO LIST </h4>
      {list.length == 0 && <p>We could not find any pending TODO.</p>}
      {list.length > 0 && (
        <ul className="todo-list">
          {list
            .filter((todo) => todo.done !== false)
            .map((todo) => {
              return (
                <li key={todo.text}>
                  <p>{todo.text}</p>
                  <button onClick={() => completeTodo(todo.text)}>Done</button>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
