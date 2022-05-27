import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/index.js';

const AtualizacaoEstoque = () => {

    const [ inputNovoNome, setInputNovoNome ] = useState('');
    const [ inputNovaQuantidade, setInputNovaQuantidade ] = useState('');
    const [ inputNovoProduto, setInputNovoProduto ] = useState('');

    const { id } = useParams();

    function editEstoque() {
        axios.put(`http://localhost:3001/editarEstoque/${id}`, {
            novoNome: inputNovoNome,
            novaQuantidade: inputNovaQuantidade,
            novoProduto: inputNovoProduto
        }).then((response) => console.log(response));

        alert("Estoque Editado com sucesso !");
    }

    return (
        <>
            <Header />
            <main className="main-cadastro">
                <div className="container">
                    <h1>Editar Estoque</h1>
                    <div className="input-field">
                        <label>Novo Nome:</label>
                        <input type='text' value={inputNovoNome} onChange={(e) => setInputNovoNome(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label>Nova Quantidade:</label>
                        <input type='text' value={inputNovaQuantidade} onChange={(e) => setInputNovaQuantidade(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <label>Novo id do produto:</label>
                        <input type='text' value={inputNovoProduto} onChange={(e) => setInputNovoProduto(e.target.value)}/>
                    </div>
                    <button className="btn-cadastrar" onClick={() => editEstoque()}>Editar</button>
                </div>
            </main>
        </>
    );
}

export default AtualizacaoEstoque;