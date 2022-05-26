import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EstoquePage from './pages/EstoquePage/index.js';
import ProdutoPage from './pages/ProdutoPage/index.js';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EstoquePage />}/>
          <Route path='/produtos' element={<ProdutoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
