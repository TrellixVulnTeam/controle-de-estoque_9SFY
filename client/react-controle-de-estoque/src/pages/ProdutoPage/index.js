import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
                <h1>Produtos</h1>
                <div className="list-container">
                    <div className="list-header">
                        <div className="attributtes">
                            <p>id</p>
                            <p>Nome</p>
                            <p>Preço</p>
                            <p>Descrição</p>
                        </div>
                        <Link to='/cadastrarProduto' className="btn-register">Cadastrar Produto</Link>
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