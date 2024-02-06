export interface Todo {
  text: string;
  done: boolean;
}

export interface ApiResponse<T> {
  data: T;
}
