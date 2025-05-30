import React, { FC, useState } from 'react';
import { IToDoItem } from '../../types';
import styles from './ToDoItem.module.scss';
import { useDeleteToDo } from '../../hooks/useDeleteToDo';
import { useSnackbar } from '../../context/SnackbarContext';

interface IToDoItemProps {
   data: IToDoItem;
}

const ToDoItem: FC<IToDoItemProps> = ({ data }) => {
   const [isDeleted, setIsDeleted] = useState<boolean>(false);

   const { mutate: deleteToDo } = useDeleteToDo();
   const { setMessage, setMessageType } = useSnackbar();

   const handleDeleteTask = (): void => {
      deleteToDo(data.id, {
         onSuccess: () => {
            setMessage('задача успешно удалена');
            setMessageType('success');
            setIsDeleted(true);
         },
         onError: () => {
            setMessage('произошла ошибка, задача не была добавлена');
            setMessageType('error');
         }
      });
   };

   if (isDeleted) {
      return null;
   }

   return (
      <li className={styles.itemContainer}>
         <p className={styles.itemTitle}>{data.title}</p>
         <p>статус задачи: {data.completed ? 'выполнена' : 'не выполнена'}</p>
         <button onClick={handleDeleteTask}>Удалить задачу</button>
      </li>
   )
}

export default ToDoItem;