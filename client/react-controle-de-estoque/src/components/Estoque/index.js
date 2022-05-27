import React from "react";
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
                    <button className="btn-edit">Editar</button>
                    <button className="btn-delete">Excluir</button>  
                </div>
            </li>        
        </>
    );
}

export default ListItem;