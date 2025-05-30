import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SnackbarContextProvider, useSnackbar } from './SnackbarContext';

jest.useFakeTimers();

const TestComponent = () => {
   const { message, setMessage, messageType, setMessageType } = useSnackbar();

   return (
      <div>
         <p data-testid="message">{message}</p>
         <p data-testid="type">{messageType}</p>
         <button onClick={() => setMessage('типа сообщение с ошибкой')}>message</button>
         <button onClick={() => setMessageType('error')}>message type</button>
      </div>
   );
};

test('message must be empty by default and messageType must be equal to success', () => {
   render(
      <SnackbarContextProvider>
         <TestComponent />
      </SnackbarContextProvider>
   );

   expect(screen.getByTestId('message').textContent).toBe('');
   expect(screen.getByTestId('type').textContent).toBe('success');
});

test('setMessage and setMessageType must work and message must be cleared after 3 seconds', () => {
   render(
      <SnackbarContextProvider>
         <TestComponent />
      </SnackbarContextProvider>
   );

   fireEvent.click(screen.getByText('message'));
   fireEvent.click(screen.getByText('message type'));

   expect(screen.getByTestId('message').textContent).toBe('типа сообщение с ошибкой');
   expect(screen.getByTestId('type').textContent).toBe('error');;
});

test('useSnackbar throws error if being called not inside provider', () => {
   const renderWithoutProvider = () => render(<TestComponent />);

   expect(renderWithoutProvider).toThrow('useSnackbar должен быть использован внутри SnackbarContextProvider');
});