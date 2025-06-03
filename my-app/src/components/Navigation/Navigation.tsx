import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
    const [showOptions, setShowOptions] = useState(false);
    return (
        <nav className="navigation">
            <ul>
                <li className="left-item"><Link to="/autenticar">Cadastrar Usuário</Link></li>
                <li className="left-item">Inserir Produto</li>
                <li className="left-item">Eliminar Produtos</li>
                <li className="left-item"><Link to="/">Relatório</Link></li>
                <li className="greeting center-item">Olá, Usuário</li>
                <li>
                    <div className="insert-options" onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
                        <button className="insert-employee-button" onClick={() => {}}>Inserir Funcionário</button>
                        {showOptions && (
                            <div className="option-list">
                                <ul>
                                    <li>Inserir Gerente</li>
                                    <li>Inserir Operador</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </li>
                <li className="right-item">Inserir Fornecedor</li>
                <li className="right-item">Sair</li>
            </ul>
        </nav>
    );
};

export default Navigation;
