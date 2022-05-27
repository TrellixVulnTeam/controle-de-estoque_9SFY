import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

const ListItem = ({ data }) => {
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
                    <button className="btn-delete">Excluir</button>  
                </div>
            </li>        
        </>
    );
}

export default ListItem;