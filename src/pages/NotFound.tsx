import React, { FC } from 'react'
import Header from '../components/Header';
import { useSnackbar } from '../context/SnackbarContext';
import Snackbar from '../components/Snackbar';

const NotFound: FC = () => {
   const { message, setMessage, messageType } = useSnackbar();

   return (
      <>
         <Header />
         <main>
            {message &&
               <Snackbar message={message} setMessage={setMessage} messageType={messageType} />
            }
            страница не найдена
         </main>
      </>
   )
}

export default NotFound;