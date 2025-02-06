import React from 'react';
import '../Header/header.css';

const Header = () => {
  return (
    <header>
      <div className="cabecalho">
        <h1>Juliana Ros Monteiro - Psicóloga de Mulheres</h1>
        <h2>Especializada em TCC (Terapia Cognitivo-Comportamental)</h2>
        <nav>
          <ul>
            <li><a href="#about" className="sobre">Sobre</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="insta-button">Instagram</a></li>
            <li><a href="https://wa.me/+551111111111?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20valores." target="_blank" rel="noreferrer" className="whatsapp-button">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;