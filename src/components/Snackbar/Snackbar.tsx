import React, { FC } from 'react';
import styles from './Snackbar.module.scss';
import { messageTypes } from '../../types';

interface ISnackbarProps {
   message: string;
   setMessage: (message: string) => void;
   messageType: messageTypes;
}

const Snackbar: FC<ISnackbarProps> = ({ message, setMessage, messageType }) => {
   return (
      <div className={`${styles.snackbarContainer} ${styles[messageType]}`}>
         <p>{message}</p>
         <button onClick={() => setMessage('')} className={styles.snackbarButton}>x</button>
      </div>
   )
}

export default Snackbar;