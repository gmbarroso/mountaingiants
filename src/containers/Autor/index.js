import React, { Component, Fragment } from 'react'

import pirandello1 from '../../img/pirandello1.jpg'
import pirandello2 from '../../img/pirandello2.jpg'
import pirandello3 from '../../img/pirandello3.jpg'

import './style.css'

class Autor extends Component {    
    render () {
      let text = `
        Foi um grande renovador do teatro, com profundo sentido\n
        de humor e grande originalidade. Suas obras mais famosas são:\n
        "Seis personagens à procura de um ator", "Assim é, se lhe\n
        parece", "Cada um a seu modo" e os romances "O falecido Matias\n
        Pascal", "Um, nenhum e cem mil", "Esta Noite improvisa-se", etc.
        Sua primeira peça foi "O Torniquete", encenada pela primeira vez\n
        em 1910 e em 1934, Pirandello recebeu o prêmio Nobel de Literatura.
        No entanto, Pirandello particiou da campanha "coleta de ouro" de\n
        Mussolini. E é ai que entra a grande obra prima de sua vida que\n
        é "Os Gigantes da montanha".
      `

      let subtext = `
      Por ter feito parte do partido fascista, Pirandello foi conquistado\n
      pelo discurso populista e patriótico de Mussolini. E quando se deu\n
      conta, percebeu o quanto aquela sociedade italiana estava fazendo\n
      um movimento contrário à arte vanguarda. 
      `

      let explicacao = `
      Com isso, Pirandello entra numa dualidade em sua vida: um grande\n
      defensor do arte afiliado ao fascismo daquela época. E que acaba\n
      refletindo essa dialética interna nas personagens criadas em suas\n
      obras.
      `

      let mais = `
       No caso dos "Gigantes", temos o Cotrone, por exemplo, que é um\n 
       alter-ego do autor. Nele é possível ver a sua paixão pelo teatro,\n
       ao mesmo tempo que age como um opressor ao impor medo quanto\n
       à dúvida do que são os gigantes da montanha para a trupe de Ilse.\n
       Sendo um mago sábio conhecedor da vida, Cotrone expõem aos\n
       moradores da vila e aos novos entrantes a sua verdadeira opinião\n
       quanto à arte atual.
      `

      return (
        <Fragment>
          <div className="title">
            <h1>Luigi Pirandello</h1>
            <h3>1867 - 1936</h3>
          </div>
          <div className="autorDiv">
            <div className="oAutor">
              <div className="luigi">
                {
                  text.split("\n").map((i,key) => {
                    return <span key={key}>{i}</span>;
                  })
                }
              </div>
              <br />
              <br />
              <div className="luigi">
                {
                  subtext.split("\n").map((i,key) => {
                    return <div key={key}>{i}</div>;
                  })
                }
              </div>
              <br />
              <br />
              <div className="luigi">
                {
                  explicacao.split("\n").map((i,key) => {
                    return <div key={key}>{i}</div>;
                  })
                }
              </div>
              <br />
              <br />
              <div className="luigi">
                {
                  mais.split("\n").map((i,key) => {
                    return <div key={key}>{i}</div>;
                  })
                }
              </div>
            </div>
            <div className="pirandellos">
              <img src={pirandello1} alt="pirandello1" className="pirandello1"></img>
              <img src={pirandello2} alt="pirandello2" className="pirandello2"></img>
              <img src={pirandello3} alt="pirandello3" className="pirandello3"></img>
            </div>
          </div>
        </Fragment>
      )
  }
}

export default Autor