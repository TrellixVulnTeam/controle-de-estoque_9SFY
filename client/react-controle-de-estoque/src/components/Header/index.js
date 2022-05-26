import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <>
            <header>
                <h2>Controle de estoque</h2>
                <ul>
                    <li><Link to='/' className='link'>Estoques</Link></li>
                    <li><Link to='/produtos' className='link'>Produtos</Link></li>
                </ul>
            </header>
        </>
    );
}

export default Header;