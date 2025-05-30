import React, { FC } from 'react'
import Header from '../components/Header/Header';
import { useSnackbar } from '../context/SnackbarContext';
import Snackbar from '../components/Snackbar/Snackbar';

const About: FC = () => {
   const { message, setMessage, messageType } = useSnackbar();

   return (
      <>
         <Header />
         <main>
            {message &&
               <Snackbar message={message} setMessage={setMessage} messageType={messageType} />
            }
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione itaque reprehenderit optio iste nesciunt corrupti sequi 
               explicabo ex consequatur! Error minima veritatis placeat facilis illo, quam molestias nihil deleniti.
            </p>
         </main>
      </>
   )
}

export default About;