import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useAddToDo } from '../hooks/useAddToDo';

const AddToDoItem: FC = () => {
   const [inputValue, setInputValue] = useState<string>('');
   const { mutate: addToDo } = useAddToDo();

   const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!inputValue.trim()) return;

      addToDo(inputValue, {
         onSuccess: () => setInputValue('')
      });
   }

   return (
      <div>
         <form onSubmit={handleFormSubmit}>
            <input value={inputValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} type="text" placeholder='Введите текст задачи' />
            <button type='submit'>Создать</button>
         </form>
      </div>
   )
}

export default AddToDoItem;