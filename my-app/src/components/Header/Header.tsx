import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header: React.FC = () => {
    

    return (
        <header className="header">
            <div className="header-content">
                <Navigation />   
            </div>
        </header>
    );
};

export default Header;

