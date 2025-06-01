import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="names">Desenvolvido por Kauan Loche e Rodrigo Goto</div>
                <div><img src="/Property 1=light.svg" alt="Logo"></img></div>
            </div>
        </footer>
    );
};

export default Footer;
