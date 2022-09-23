import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { ButtonDefault, ButtonPrimary } from './components/styledComponets/Default';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/profile" element={<h1>profile</h1>} />
      </Routes>
    </div>
  );
}

export default App;
