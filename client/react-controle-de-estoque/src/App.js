import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EstoquePage from './pages/EstoquePage';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EstoquePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
