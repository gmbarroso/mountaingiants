import React, { Component, Fragment } from 'react'

import giantsit1 from '../../img/giantsit1.jpg'
import giantsit2 from '../../img/giantsit2.jpg'
import giantsit3 from '../../img/giantsit3.jpg'
import giantsbr1 from '../../img/giantsbr1.jpg'
import giantsbr2  from '../../img/giantsbr2.jpg'
import giantsbr3 from '../../img/giantsbr3.jpg'
import giantsro1 from '../../img/giantsro1.jpg'
import giantsro2 from '../../img/giantsro2.jpg'
import giantsro3 from '../../img/giantsro3.jpg'

import './style.css'

class Inspirations extends Component {    
    render () {
      let text = `
        Este espaço ficou reservado para mostrarmos nossas inspirações que buscamos para a montagem. Abaixo\n
        você poderá ver outros grupos, de diferentes países que também montaram "Os Gigantes da montanha. Cada\n
        um com suas peculiaridades. Como grupo, muito nos interessa saber o que outras escolas e grupos de teatro\n
        fizeram para essa montagem. A parte da pesquisa é muito importante para buscarmos nossas instenções. E\n
        por mais distante esse grupo esteja, a parte visual pode nos trazer uma grande ideia da busca desses\n
        respectivos grupos.
      `
      
      return (
        <Fragment>
          <div className="title">
            <h1>Nossas inspirações</h1>
          </div>
          <div className="intro">
              {
                text.split("\n").map((i,key) => {
                  return <span key={key}>{i}</span>;
                })
              }
          </div>
          <div className="grupos">
            <div className="italianGr">
              <h3>Grupo italiano</h3>
              <p>Montagem feita pelo grupo italiano de nome italiano gritante</p>
              <img src={giantsit1} alt="giantsit1" className="giantsit1"></img>
              <img src={giantsit2} alt="giantsit2" className="giantsit2"></img>
              <img src={giantsit3} alt="giantsit3" className="giantsit3"></img>
            </div>
            <div className="brazilianGr">
              <h3>Grupo brasileiro</h3>
              <p>Montagem feita pelo grupo italiano de nome italiano gritante</p>
              <img src={giantsbr1} alt="giantsbr1" className="giantsbr1"></img>
              <img src={giantsbr2} alt="giantsbr2" className="giantsbr2"></img>
              <img src={giantsbr3} alt="giantsbr3" className="giantsbr3"></img>
            </div>
            <div className="romenianGr">
              <h3>Grupo romeno</h3>
              <p>Montagem feita pelo grupo italiano de nome italiano gritante</p>
              <img src={giantsro1} alt="giantsro1" className="giantsro1"></img>
              <img src={giantsro2} alt="giantsro2" className="giantsro2"></img>
              <img src={giantsro3} alt="giantsro3" className="giantsro3"></img>
            </div>
          </div>
        </Fragment>
      )
  }
}

export default Inspirations