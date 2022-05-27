import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './style.css';

const ListItem = ({ data }) => {

    const [ quantidadeProdutos, setQuantidadeProdutos ] = useState(data?.quantidadeProdutos);

    function deleteEstoque() {
        axios.delete(`http://localhost:3001/deletarEstoque/${data?.id}`)
        .then((response) => console.log(response));

        alert('Estoque Excluido com sucesso !');
    }

    return (
        <>
            <li className="list-item">
                <div className="data">
                    <p>{data?.nomeEstoque}</p>
                    <p>{data?.quantidade}</p>
                    <p>{data?.nomeProduto}</p>
                </div>
                <div className="buttons">
                    <Link to={`/editarEstoque/${data.id}`} className="btn-edit">Editar</Link>
                    <button className="btn-delete" onClick={() => deleteEstoque()}>Excluir</button>
                    <button className="btn-debitar">Debitar Produto</button>
                </div>
            </li>        
        </>
    );
}

export default ListItem;