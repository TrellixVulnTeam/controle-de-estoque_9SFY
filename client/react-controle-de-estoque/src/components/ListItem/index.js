import React from "react";
import './style.css';

const ListItem = ({ data }) => {
    return (
        <>
            <li className="list-item">
                <p>{data?.nome}</p>
                <p>{data?.quantidade}</p>
                <div className="buttons">
                    <button className="btn-edit">Editar</button>
                    <button className="btn-delete">Excluir</button>  
                </div>
            </li>        
        </>
    );
}

export default ListItem;