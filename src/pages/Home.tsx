import React, { FC } from 'react';
import styles from './Home.module.scss';
import { useSnackbar } from '../context/SnackbarContext';
import Snackbar from '../components/Snackbar';
import AddToDoItem from '../components/AddToDoItem';
import ToDoList from '../components/ToDoList';
import Header from '../components/Header';

const Home: FC = () => {
   const { message, setMessage, messageType } = useSnackbar();

   return (
      <>
         <Header />
         <main className={styles.container}>
            {message &&
               <Snackbar message={message} setMessage={setMessage} messageType={messageType} />
            }
            <h1>Список задач</h1>
            <AddToDoItem />
            <ToDoList />         
         </main>
      </>
   )
}

export default Home;