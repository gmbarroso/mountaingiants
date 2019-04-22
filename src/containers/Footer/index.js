import React from 'react';

import '../Footer/style.css'

const Footer = () => {
    return (
      <div className="footer">
          <a
            className="oficina"
            target="_blank"
            href="http://www.oficinadeatores.com.br/oficinadeatoresdesaopaulo.html"
            rel="noopener noreferrer"
          >
              Oficina de atores SP
          </a>
        <div>
          <p>Local da peça</p>
          <a
            align="right"
            className="dellacosta"
            target="_blank"
            href="http://teatromariadellacosta.com.br/"
            rel="noopener noreferrer"
          >
              Teatro Maria Della Costa
          </a>
        </div>
        <div className="schedule">
          <p>Dias e horários:</p>
          <span>Sábados e Domingos</span>
          <span>De 19:00 às 21:00</span>
        </div>
        <span>Classificação: 16 anos</span>
        <div className="createdBy">
          <p>Criado por:</p>
          <span>gmbarroso</span>
        </div>
      </div>
    )
}

export default Footer;