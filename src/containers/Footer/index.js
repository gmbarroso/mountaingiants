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
        <div className="localizacao">
          <strong>Localização:</strong>
          <br />
          <br />
          <p>Teatro Maria Della Costa</p><br />
          <p>Rua Paim, 72, Bela Vista - SP</p>
        </div>
        <div className="schedule">
          <strong>Dias e horários:</strong>
          <br />
          <br />
          <p>Durante o mês de Junho/2019</p><br />
          <p>Aos Sábados e Domingos</p><br />
          <p>De 19:00 às 21:00</p>
        </div>
          <p>Classificação: xx anos</p>
        <div className="createdBy">
          <p>Criado por:</p>
          <a
            target="_blank"
            href="https://github.com/gmbarroso"
            rel="noopener noreferrer" 
          >
            gmbarroso
          </a>
        </div>
      </div>
    )
}

export default Footer;