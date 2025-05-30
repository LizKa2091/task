import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';
import App from './App';
import { SnackbarContextProvider } from './context/SnackbarContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SnackbarContextProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </SnackbarContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);