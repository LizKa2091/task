import React, { FC } from 'react'
import { useToDoItems } from '../hooks/useToDoItems';
import { IToDoItem } from '../types';
import ToDoItem from './ToDoItem';
import styles from './ToDoList.module.scss';
import { useSnackbar } from '../context/SnackbarContext';

const ToDoList: FC = () => {
   const { data, isLoading, isError } = useToDoItems();
   const { setMessage, setMessageType } = useSnackbar();

   if (isLoading) {
      return <span>Загрузка...</span>
   }

   if (isError) {
      setMessage('произошла ошибка при загрузке задач');
      setMessageType('error');
      return <span>Произошла ошибка</span>;
   }

   if (!data || data?.length === 0) {
      return <span>У вас ещё нет задач, добавьте новую задачу</span>
   }
   return (
      <>
         <ul className={styles.list}>
            {data?.length && data?.length > 0 &&
               data.map((toDo: IToDoItem) => (
                  <ToDoItem key={toDo.id} data={toDo} />
               ))
            }
         </ul>
      </>
   )
}

export default ToDoList;