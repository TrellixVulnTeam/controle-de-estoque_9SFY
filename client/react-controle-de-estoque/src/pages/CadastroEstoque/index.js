import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header/index.js";
import './style.css';

const CadastroEstoque = () => {
    return (
        <>
            <Header />
            <main className="main-cadastro">
                <div className="container">
                    <h1>Cadastrar Estoque</h1>
                    <div className="input-field">
                        <label>Nome:</label>
                        <input type='text' />
                    </div>
                    <div className="input-field">
                        <label>Quantidade:</label>
                        <input type='text' />
                    </div>
                    <div className="input-field">
                        <label>Id do Produto:</label>
                        <input type='text' />
                    </div>
                    <button className="btn-cadastrar">Cadastrar</button>
                </div>
            </main>
        </>
    );
}

export default CadastroEstoque;