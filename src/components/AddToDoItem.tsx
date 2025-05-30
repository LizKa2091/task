import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useAddToDo } from '../hooks/useAddToDo';
import { useSnackbar } from '../context/SnackbarContext';

const AddToDoItem: FC = () => {
   const [inputValue, setInputValue] = useState<string>('');
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const { mutate: addToDo } = useAddToDo();
   const { setMessage, setMessageType } = useSnackbar();

   const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (isLoading) return;
      setIsLoading(true);

      if (!inputValue.trim()) {
         setMessage('текст задачи не может быть пустым');
         setMessageType('error');
         setIsLoading(false);
         return;
      }

      addToDo(inputValue, {
         onSuccess: () => {
            setInputValue('');
            setMessage('задача успешно добавлена');
            setMessageType('success');
            setIsLoading(false);
         },
         onError: () => {
            setMessage('произошла ошибка, задача не была добавлена');
            setMessageType('error');
            setIsLoading(false);
         }
      });
   }

   return (
      <div>
         <form onSubmit={handleFormSubmit}>
            <input value={inputValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} type="text" placeholder='Введите текст задачи' />
            <button type='submit' disabled={isLoading}>Создать</button>
         </form>
      </div>
   )
}

export default AddToDoItem;