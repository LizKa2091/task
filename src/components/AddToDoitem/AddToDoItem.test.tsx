import { render, screen, fireEvent } from '@testing-library/react';
import AddToDoItem from './AddToDoItem';
import Snackbar from '../Snackbar/Snackbar';
import { SnackbarContextProvider, useSnackbar } from '../../context/SnackbarContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// мок, чтобы избежать ошибки axios в тесте
jest.mock('../../hooks/useAddToDo', () => ({
   useAddToDo: () => ({
      mutate: jest.fn((value, { onSuccess }) => onSuccess())
   })
}));

const queryClient = new QueryClient();

const TestWrapper = () => {
   const { message, setMessage, messageType } = useSnackbar();

   return (
      <>
         <AddToDoItem />
         {message && 
            <Snackbar message={message} setMessage={setMessage} messageType={messageType} />
         }
      </>
   );
};

const renderComponent = () => render(
   <QueryClientProvider client={queryClient}>
      <SnackbarContextProvider>
         <TestWrapper />
      </SnackbarContextProvider>
   </QueryClientProvider>
);

test('error when is empty', async () => {
   renderComponent();

   fireEvent.click(screen.getByRole('button', { name: /создать/i }));
   expect(await screen.findByText(/текст задачи не может быть пустым/i)).toBeInTheDocument();
});
