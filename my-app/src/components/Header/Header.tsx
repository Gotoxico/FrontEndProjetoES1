import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Navigation2 from '../Navigation/Navigation2';
import './Header.css';

const Header: React.FC = () => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <header className="header">
            <div className="header-content">
                <Navigation />
                <div className="greeting">Olá, Usuário</div>
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
                <Navigation2 />
            </div>
        </header>
    );
};

export default Header;

