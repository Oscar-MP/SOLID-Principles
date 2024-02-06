import axios from "axios";
import { ApiResponse, Todo } from "../models/todos";

export const fetchTODOs = (): Promise<Todo[]> => {
  return axios
    .get<ApiResponse<Todo[]>>("/srp-data.json")
    .then((response) => response.data.data)
    .catch((err) => {
        throw err
    });
};
