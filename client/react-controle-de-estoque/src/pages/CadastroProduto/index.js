import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header/index.js";

const CadastroProduto = () => {
    return (
        <>
            <Header />
            <main className="main-cadastro">
                <div className="container">
                    <h1>Cadastrar Produto</h1>
                    <div className="input-field">
                        <label>Nome:</label>
                        <input type='text' />
                    </div>
                    <div className="input-field">
                        <label>Preço:</label>
                        <input type='text' />
                    </div>
                    <div className="input-field">
                        <label>Descrição:</label>
                        <input type='text' />
                    </div>
                    <button className="btn-cadastrar">Cadastrar</button>
                </div>
            </main>
        </>
    );
}

export default CadastroProduto;