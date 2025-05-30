export interface IToDoItem {
   userId: number,
   id: number;
   title: string;
   completed: boolean;
}

export type messageTypes = 'success' | 'error';