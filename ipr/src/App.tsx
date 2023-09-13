import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './components/MainPage';

import './sass/main.sass';
import Profile from './components/Profile';

const App: FC = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={ <MainPage/> }/>
        <Route path='/profile/:id' element={ <Profile/> }/>
      </Routes>
    </div>
  );
};

export default App;
