import React, { FC } from 'react';
import ToDoList from './components/ToDoList';
import './styles/global.scss';
import styles from './App.module.scss';

const App: FC = () => {
   return (
      <div className={styles.container}>
         <ToDoList />
      </div>
   );
}

export default App;