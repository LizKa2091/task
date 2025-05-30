import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';
import App from './App';
import { SnackbarContextProvider } from './context/SnackbarContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SnackbarContextProvider>
         <App />
      </SnackbarContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);