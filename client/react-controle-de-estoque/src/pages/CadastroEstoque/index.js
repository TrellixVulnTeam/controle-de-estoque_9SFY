import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header/index.js";
import './style.css';

const CadastroEstoque = () => {

    const [ inputNome, setInputNome ] = useState('');
    const [ inputQuantidade, setInputQuantidade ] = useState('');
    const [ inputIdProduto, setInputIdProduto ] = useState('');

    function registerEstoque() {
        axios.post('http://localhost:3001/cadastrarEstoque', {
            nome: inputNome,
            quantidade: inputQuantidade,
            produto: inputIdProduto
        }).then((response) => console.log(response));
        
        alert("Estoque Cadastrado com sucesso !");
    }

    return (
        <>
            <Header />
            <main className="main-cadastro">
                <div className="container">
                    <h1>Cadastrar Estoque</h1>
                    <div className="input-field">
                        <label>Nome:</label>
                        <input type='text' value={inputNome} onChange={(e) => setInputNome(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label>Quantidade:</label>
                        <input type='text' value={inputQuantidade} onChange={(e) => setInputQuantidade(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label>Id do Produto:</label>
                        <input type='text' value={inputIdProduto} onChange={(e) => setInputIdProduto(e.target.value)} />
                    </div>
                    <button className="btn-cadastrar" onClick={() => registerEstoque()}>Cadastrar</button>
                </div>
            </main>
        </>
    );
}

export default CadastroEstoque;