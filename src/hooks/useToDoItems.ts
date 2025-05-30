import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IToDoItem } from "../types";

const fetchToDos = async (): Promise<IToDoItem[]> => {
   const baseUrl = process.env.REACT_APP_BASE_URL;

   const response = await axios.get<IToDoItem[]>(`${baseUrl}/todos`);

   return response.data;
}

export const useToDoItems = () => {
   return useQuery<IToDoItem[], Error>({
      queryKey: ['todos'],
      queryFn: fetchToDos,
      retry: 2,
      staleTime: Infinity,
      refetchOnMount: false
   })
};