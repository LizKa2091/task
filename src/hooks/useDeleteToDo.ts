import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IToDoItem } from "../types";

const deleteToDo = async (toDoId: number): Promise<void> => {
   const baseUrl = process.env.REACT_APP_BASE_URL;
   
   await axios.delete<IToDoItem[]>(`${baseUrl}/todos/${toDoId}`);
}

export const useDeleteToDo = () => {
   const queryClient = useQueryClient();

   return useMutation<void, Error, number>({
      mutationKey: ['todos', 'delete'],
      mutationFn: deleteToDo,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
      onError: (e: Error) => console.error(e)
   })
};