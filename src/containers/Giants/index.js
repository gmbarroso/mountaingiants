import React, { Component, Fragment } from 'react'

import giant1 from '../../img/giant1.jpg'
import giant2 from '../../img/giant2.jpg'
import giant3 from '../../img/giant3.jpg'
import giant4 from '../../img/giant4.jpg'
import giant5 from '../../img/giant5.jpg'
import giant6 from '../../img/giant6.jpg'

import './style.css'

class Giants extends Component {    
    render () {
      let giantsDefinition = `
        Segundo a mitologia grega, os gigantes eram seres de grande força e agressão. Segundo a mitologia romana\n
        os gigantes são Deuses e divindades. E, por último, segundo a mitologia nórdica, os Jotun (como são chamados\n
        os gigantes), são uma raça mitológica com força sobre-humana e se manifestam sempre em oposição aosdeuses.\n
        Independente da mitologia, em todas elas os gigantes são sempre retratados de uma maneira grotesca, seres\n
        diferentes, peculiares, com corpos e posturas diferentes, bem caricatos.
      `

      let pirandelloDefinition = `
        Para Pirandello os gigantes também são seres grotescos, no entanto, a sua definição é diferente das ditas\n
        acima nas diferentes mitologias. Luigi Pirandello retrata os gigantes da montanha como pessoas, indivíduos\n
        que esqueceram o que é a arte, esqueceram o que é existir no mundo de forma única. São seres que reproduzem\n
        as características de uma sociedade sem se perguntarem o porque de suas ações diárias. Essa alienação retirou\n
        das pessoas o livre arbítrio. Hoje são seres movidos pelo senso comum, que carregam o ódio daquilo que não\n
        conseguem compreender. E a falta de compreensão leva a bitolação e com isso a reprodução de tudo de ruim\n
        que uma cultura ou uma sociedade carrega. 
      `

      return (
        <Fragment>
          <div className="title">
            <h1>Os Gigantes</h1>
            <h3>O que são esses seres mitológicos para Pirandello?</h3>
          </div>
          <div className="creatures">
            {
              giantsDefinition.split("\n").map((i,key) => {
                return <span key={key}>{i}</span>;
              })
            }
          </div>
          <div className="creatures">
            {
              pirandelloDefinition.split("\n").map((i,key) => {
                return <span key={key}>{i}</span>;
              })
            }
          </div>
          <div className="giantsDiv">
              <div className="giantsPhotos1">
                <img src={giant1} alt="giant1" className="giant1"></img>
                <img src={giant2} alt="giant2" className="giant2"></img>
                <img src={giant3} alt="giant3" className="giant3"></img>
              </div>
              <div className="giantsPhotos2">
                <img src={giant4} alt="giant4" className="giant4"></img>
                <img src={giant5} alt="giant5" className="giant5"></img>
                <img src={giant6} alt="giant6" className="giant6"></img>
              </div>
          </div>
        </Fragment>
      )
  }
}

export default Giants