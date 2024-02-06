import { useEffect, useState } from "react";
import { Todo } from "../models/todos";
import { fetchTODOs } from "../services/todo.service";

const useTodo = () => {
  const [items, setItems] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const addTodo = (newTodo: string) => {
    setItems((prevItems) => [{ text: newTodo, done: false }, ...prevItems]);
  };

  const completeTodo = (todoText: string): void => {
    setItems(prevItems => prevItems.filter(item => item.text !== todoText))
  }

  useEffect(() => {
    fetchTODOs()
      .then((todos) => setItems(todos))
      .finally(() => setIsLoading(false));
  }, []);

  return { todos: items, isLoading, addTodo, completeTodo };
};

export default useTodo;
