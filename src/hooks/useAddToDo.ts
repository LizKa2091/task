import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IToDoItem } from "../types";

const addToDo = async (title: string): Promise<IToDoItem> => {
   const baseUrl = process.env.REACT_APP_BASE_URL;
   
   const response = await axios.post<IToDoItem>(`${baseUrl}/todos`, {
      userId: 1,
      id: Math.floor(Math.random() * 1000000),
      title,
      completed: false
   });

   return response.data;
}

export const useAddToDo = () => {
   const queryClient = useQueryClient();

   return useMutation<IToDoItem, Error, string>({
      mutationKey: ['todos', 'add'],
      mutationFn: addToDo,
      onSuccess: (newToDo: IToDoItem) => queryClient.setQueryData(['todos'], (old: IToDoItem[] = []) => [{...newToDo, id: Math.floor(Math.random() * 1000000)}, ...old]),
      onError: (e: Error) => console.error(e)
   })
};