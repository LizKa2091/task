import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import { messageTypes } from '../types';

interface SnackbarContextType {
   message: string;
   setMessage: (message: string) => void;
   messageType: messageTypes;
   setMessageType: (messageType: messageTypes) => void;
}

interface ISnackbarContextProviderProps {
   children: ReactNode;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

const SnackbarContextProvider: FC<ISnackbarContextProviderProps> = ({ children }) => {
   const [message, setMessage] = useState<string>('');
   const [messageType, setMessageType] = useState<messageTypes>('success');

   useEffect(() => {
      if (message) {
         const timer = setTimeout(() => {
            setMessage('');
         }, 3000);

         return () => clearTimeout(timer);
      }
   }, [message]);

   return (
      <SnackbarContext.Provider value={{ message, setMessage, messageType, setMessageType }}>
         {children}
      </SnackbarContext.Provider>
   )
};

const useSnackbar = () => {
   const context = useContext(SnackbarContext);

   if (!context) throw new Error('useSnackbar должен быть использован внутри SnackbarContextProvider');
   return context;
}

export { SnackbarContext, SnackbarContextProvider, useSnackbar };