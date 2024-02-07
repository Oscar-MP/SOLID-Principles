import { useRef } from "react";


interface TodoInputProps {
  onSubmit: (newTodo: string) => void;
}

const TodoInput = ({ onSubmit }: TodoInputProps): JSX.Element => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const submitedText = (inputRef.current as unknown as HTMLInputElement)
      ?.value;

    onSubmit(submitedText);
  };

  return (
    <div className="input-field">
      <input ref={inputRef} type="text" name="todo" id="todo-input" />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TodoInput;
