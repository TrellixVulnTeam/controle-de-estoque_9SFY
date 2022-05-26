import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Header from "../../components/Header/index.js";
import List from "../../components/List/index.js";
import Estoque from "../../components/Estoque/index.js";

const EstoquePage = () => {

    const [ estoques, setEstoques ] = useState([]);

    function getEstoques() {
        Axios.get('http://localhost:3001/getEstoques')
        .then((response) => {
            setEstoques(response.data);
        });

    }

    useEffect(() => {
        getEstoques();
    }, []);

    return (
        <>
            <Header />
            <main>
                <div className="list-container">
                    <div className="list-header">
                        <div className="attributtes">
                            <p>Nome</p>
                            <p>Quantidade</p>
                        </div>
                        <button className="btn-register">Cadastrar Estoque</button>
                    </div>
                    <List>
                        {estoques.map((estoque, index) => {
                            return (
                                <Estoque key={index} data={estoque} />
                            );
                        })}
                    </List>
                </div>
            </main>
        </>
    );
}

export default EstoquePage;