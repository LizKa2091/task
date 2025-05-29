import React, { FC } from 'react'
import { useToDoItems } from '../hooks/useToDoItems';
import { IToDoItem } from '../types';
import ToDoItem from './ToDoItem';
import styles from './ToDoList.module.scss';

const ToDoList: FC = () => {
   const { data, isError } = useToDoItems();

   if (isError) {
      return <span>произошла ошибка</span>;
   }

   if (!data || data?.length === 0) {
      return <span>у вас ещё нет задач, добавьте новую задачу</span>
   }
   return (
      <div>
         <h1>Список ваших задач</h1>
         <ul className={styles.list}>
            {data?.length && data?.length > 0 &&
               data.map((toDo: IToDoItem) => (
                  <ToDoItem key={toDo.id} data={toDo} />
               ))
            }
         </ul>
      </div>
   )
}

export default ToDoList;