import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import List from "../../components/List/index.js";
import Produto from '../../components/Produto/index.js';

const ProdutoPage = () => {

    const [ produtos, setProdutos ] = useState([]);

    function getProdutos() {
        axios.get('http://localhost:3001/produtos/getProdutos')
        .then((response) => {
            setProdutos(response.data);
        });
    }

    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <>
            <Header />
            <main>
                <div className="list-container">
                    <div className="list-header">
                        <div className="attributtes">
                            <p>id</p>
                            <p>Nome</p>
                            <p>Preço</p>
                            <p>Descrição</p>
                        </div>
                        <button className="btn-register">Cadastrar Produto</button>
                    </div>
                    <List>
                        {produtos.map((produto, index) => {
                            return (
                                <Produto key={index} data={produto} />
                            );
                        })}
                    </List>
                </div>
            </main>
        </>
    );
}

export default ProdutoPage;