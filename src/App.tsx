import React, { FC } from 'react';
import ToDoList from './components/ToDoList';
import AddToDoItem from './components/AddToDoItem';
import './styles/global.scss';
import styles from './App.module.scss';
import { useSnackbar } from './context/SnackbarContext';
import Snackbar from './components/Snackbar';

const App: FC = () => {
   const { message, setMessage, messageType } = useSnackbar();

   return (
      <div className={styles.container}>
         {message &&
            <Snackbar message={message} setMessage={setMessage} messageType={messageType} />
         }
         <AddToDoItem />
         <ToDoList />         
      </div>
   );
}

export default App;