import axios from 'axios';
import React, { useState } from 'react';
import Header from '../../components/Header/index.js';

const AtualizacaoProduto = () => {

    const [ inputNovoNome, setInputNovoNome ] = useState('');
    const [ inputNovoPreco, setInputNovoPreco ] = useState('');
    const [ inputNovaDescricao, setInputNovaDescricao ] = useState('');

    function editProduto() {
        axios.put('http://localhost:3001/editarProduto/:id', {
            novoNome: inputNovoNome,
            novoPreco: inputNovoPreco,
            novaDescricao: inputNovaDescricao
        }).then((response) => console.log(response));

        alert("Produto Editado com sucesso !");
    }

    return (
        <>
            <Header />
            <main className="main-cadastro">
                <div className="container">
                    <h1>Editar Produto</h1>
                    <div className="input-field">
                        <label>Novo Nome:</label>
                        <input type='text' value={inputNovoNome} onChange={(e) => setInputNovoNome(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label>Novo Preço:</label>
                        <input type='text' value={inputNovoPreco} onChange={(e) => setInputNovoPreco(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <label>Nova descrição:</label>
                        <input type='text' value={inputNovaDescricao} onChange={(e) => setInputNovaDescricao(e.target.value)}/>
                    </div>
                    <button className="btn-cadastrar" onClick={() => editProduto()}>Editar</button>
                </div>
            </main>
        </>
    );
}

export default AtualizacaoProduto;