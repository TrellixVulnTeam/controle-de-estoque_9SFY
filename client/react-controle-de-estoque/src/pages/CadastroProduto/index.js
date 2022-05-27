import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header/index.js";

const CadastroProduto = () => {

    const [ inputNome, setInputNome ] = useState('');
    const [ inputPreco, setInputPreco ] = useState('');
    const [ inputDescricao, setInputDescricao ] = useState('');

    function registerProduto() {
        axios.post('http://localhost:3001/cadastrarProduto', {
            nome: inputNome,
            preco: inputPreco,
            descricao: inputDescricao
        }).then((response) => console.log(response));
        
        alert("Produto Cadastrado com sucesso !");
    }

    return (
        <>
            <Header />
            <main className="main-cadastro">
                <div className="container">
                    <h1>Cadastrar Produto</h1>
                    <div className="input-field">
                        <label>Nome:</label>
                        <input type='text' value={inputNome} onChange={(e) => setInputNome(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label>Preço:</label>
                        <input type='text' value={inputPreco} onChange={(e) => setInputPreco(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <label>Descrição:</label>
                        <input type='text' value={inputDescricao} onChange={(e) => setInputDescricao(e.target.value)}/>
                    </div>
                    <button className="btn-cadastrar" onClick={() => registerProduto()}>Cadastrar</button>
                </div>
            </main>
        </>
    );
}

export default CadastroProduto;