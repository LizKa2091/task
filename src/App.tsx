import React, { FC } from 'react';
import './styles/global.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App: FC = () => {

   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='*' element={<NotFound />} />
      </Routes>
   );
}

export default App;