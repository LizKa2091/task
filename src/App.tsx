import React, { FC } from 'react';
import ToDoList from './components/ToDoList';
import AddToDoItem from './components/AddToDoItem';
import './styles/global.scss';
import styles from './App.module.scss';

const App: FC = () => {
   return (
      <div className={styles.container}>
         <AddToDoItem />
         <ToDoList />
      </div>
   );
}

export default App;