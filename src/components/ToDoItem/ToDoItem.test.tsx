import { render, screen, fireEvent } from '@testing-library/react';
import ToDoItem from './ToDoItem';
import { SnackbarContextProvider } from '../../context/SnackbarContext';

// мок, чтобы избежать ошибки axios в тесте
jest.mock('../../hooks/useDeleteToDo', () => ({
   useDeleteToDo: () => ({
      mutate: (id: number, { onSuccess }: { onSuccess: () => void }) => onSuccess(),
   }),
}));

test('renders title and status, hides after delete', () => {
   const data = {
      userId: 1,
      id: 42,
      title: 'test task',
      completed: false
   };
 
   render(
      <SnackbarContextProvider>
         <ul>
            <ToDoItem data={data} />
         </ul>
      </SnackbarContextProvider>
   );
 
   expect(screen.getByText('test task')).toBeInTheDocument();
   
   fireEvent.click(screen.getByRole('button', { name: /удалить задачу/i }));
   expect(screen.queryByText('test task')).toBeNull();
});
