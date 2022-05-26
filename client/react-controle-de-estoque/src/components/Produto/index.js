import React from "react";

const ListItem = ({ data }) => {
    return (
        <>
            <li className="list-item">
                <div className="data">
                    <p>{data?.id}</p>
                    <p>{data?.nome}</p>
                    <p>{data?.preco}</p>
                    <p>{data?.descricao}</p>
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