import { render, screen, fireEvent } from '@testing-library/react';
import Snackbar from './Snackbar';

test('displays message and clears it on click on button', () => {
   const setMessage = jest.fn();

   render(<Snackbar message='ошибка' setMessage={setMessage} messageType='error' />);
   expect(screen.getByText('ошибка')).toBeInTheDocument();

   fireEvent.click(screen.getByRole('button'));
   expect(setMessage).toHaveBeenCalledWith('');
});
