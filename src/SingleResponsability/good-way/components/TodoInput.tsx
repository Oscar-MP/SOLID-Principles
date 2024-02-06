import { Todo } from "../models/todos";

interface TodoInputProps {
  onSubmit: (newTodo: string) => void;
}

const TodoInput = ({ onSubmit }: TodoInputProps): JSX.Element => {
  
    const handleSubmit = () => {

  };
  
  return (
    <div className="input-field">
      <input ref={todoInputRef} type="text" name="todo" id="todo-input" />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TodoInput;
