import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EstoquePage from './pages/EstoquePage/index.js';
import ProdutoPage from './pages/ProdutoPage/index.js';
import CadastroEstoque from './pages/CadastroEstoque/index.js';
import CadastroProduto from './pages/CadastroProduto/index.js';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EstoquePage />}/>
          <Route path='/produtos' element={<ProdutoPage />} />
          <Route path='/cadastrarEstoque' element={<CadastroEstoque />} />
          <Route path='/cadastrarProduto' element={<CadastroProduto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
