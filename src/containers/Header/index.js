import React from 'react';

import facebook from '../../img/facebook_icon.svg'
import instagram from '../../img/Instagram_logo.svg'

import './style.css'

const Header = () => {
    return (
      <div className="header">
        <h1>Grupo Tece</h1>
        <div className="links">
          <a className="link" href="./Home">Home</a>
          <a className="link" href="#logo">Obra</a>
          <a className="link" href="#logo">Autor</a>
          <a className="link" href="#logo">Os Gigantes</a>
          <a className="link" href="#logo">Elenco</a>
          <a className="link" href="#logo">Inspirações</a>
        </div>
        <div className="logos">
          <a href="./Home">
            <img src={facebook} className="facebookLogo" alt="logo" />
          </a>
          <a
            href="https://www.instagram.com/osgigantesdamontanha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} className="instagramLogo" alt="logo" />
          </a>
        </div>
      </div>
    )
}

export default Header;