import React from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <ul>
                <li><a href="#">Cadastrar Usuário</a></li>
                <li><a href="#">Inserir Produto</a></li>
                <li><a href="#">Eliminar Produtos</a></li>
                <li><a href="#">Relatório</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
