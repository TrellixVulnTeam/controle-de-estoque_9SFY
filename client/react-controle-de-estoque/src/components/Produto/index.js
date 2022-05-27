import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ data }) => {
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
                    <button className="btn-delete">Excluir</button>  
                </div>
            </li>        
        </>
    );
}

export default ListItem;