import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './style.css';

const ListItem = ({ data }) => {
    function deleteEstoque() {
        axios.delete(`http://localhost:3001/deletarEstoque/${data?.id}`)
        .then((response) => console.log(response));

        alert('Estoque Excluido com sucesso !');
    }

    function debitarProduto() {
        if(data?.quantidade > 0) {
            axios.put(`http://localhost:3001/debitarProduto/${data?.id}`, {
                quantidadeAtualizada: data?.quantidade - 1
            }).then((response) => console.log(response));

            alert('Produto Debitado !');
        }
        return;
    }

    return (
        <>
            <li className="list-item">
                <div className="data">
                    <p>{data?.nomeEstoque}</p>
                    <p>{data?.quantidade > 0 ? data?.quantidade : 'Estoque vazio'}</p>
                    <p>{data?.nomeProduto}</p>
                </div>
                <div className="buttons">
                    <Link to={`/editarEstoque/${data.id}`} className="btn-edit">Editar</Link>
                    <button className="btn-delete" onClick={() => deleteEstoque()}>Excluir</button>
                    <button className="btn-debitar" onClick={() => debitarProduto()}>Debitar Produto</button>
                </div>
            </li>        
        </>
    );
}

export default ListItem;