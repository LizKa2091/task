import React, { FC, useState } from 'react';
import { IToDoItem } from '../types';
import styles from './ToDoItem.module.scss';
import { useDeleteToDo } from '../hooks/useDeleteToDo';

interface IToDoItemProps {
   data: IToDoItem;
}

const ToDoItem: FC<IToDoItemProps> = ({ data }) => {
   const [isDeleted, setIsDeleted] = useState<boolean>(false);
   const { mutate: deleteToDo } = useDeleteToDo();

   const handleDeleteTask = (id: number) => {
      deleteToDo(id);
      setIsDeleted(true);
   };

   if (isDeleted) {
      return null;
   }

   return (
      <li key={data.id} className={styles.itemContainer}>
         <p className={styles.itemTitle}>{data.title}</p>
         <p>статус задачи: {data.completed ? 'выполнена' : 'не выполнена'}</p>
         <button onClick={() => handleDeleteTask(data.id)}>Удалить задачу</button>
      </li>
   )
}

export default ToDoItem;