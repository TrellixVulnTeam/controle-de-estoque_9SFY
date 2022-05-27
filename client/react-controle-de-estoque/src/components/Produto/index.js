import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const ListItem = ({ data }) => {

    function deleteProduto() {
        axios.delete(`http://localhost:3001/deletarProduto/${data?.id}`)
        .then((response) => console.log(response));

        alert('Produto Excluido com sucesso !');
    }

    return (
        <>
            <li className="list-item">
                <div className="data">
                    <p>{data?.id}</p>
                    <p>{data?.nomeProduto}</p>
                    <p>R$ {Math.floor(data?.preco)}</p>
                    <p>{data?.descricao}</p>
                </div>
                <div className="buttons">
                    <Link to={`/editarProduto/${data?.id}`} className="btn-edit">Editar</Link>
                    <button className="btn-delete" onClick={() => deleteProduto()}>Excluir</button>  
                </div>
            </li>        
        </>
    );
}

export default ListItem;