import React, { Component, Fragment } from 'react'

import livroIt from '../../img/livro.jpg'
import livroBr from '../../img/livro_ptbr.jpg'

import './style.css'

class Obra extends Component {    
    render () {
      let text = `
      "Talvez eu também pudesse ter sido um grande homem, Condessa. Renunciei.\n
      Despojei-me de tudo: decoro, honra, dignidade, virtude; todas as coisas que,\n
      pela graça de Deus, os animais ignoram em sua pia inocência. Liberada de todos estes \n
      embaraçosos, nossa alma se engrandece como o ar, plena de sol ou \n
      de nuvens, aberta a todos os clarões, abandonada a todos os \n
      eventos, supéflua e misteriosa matéria de prodígios que nos enleva\n
      e nos dispersa em maravilhosas evasões. Olhamos para a\n
      terra, e que tristeza! Talvez, lá embaixo, haja alguém que acredita\n
      estar vivendo a nossa vida; mas não é verdade. Nenhum de\n
      nós está no corpo em que o outro nos vê; mas na alma que fala,\n
      e não se sabe de onde; ninguém pode saber: aparência em meio\n
      a aparências, com este bufo nome de Cotrone... ele, de Doccia...\n
      ele, de Quaquèo... Um corpo é a morte: trevas e pedra. Pobre\n
      de quem se vê em seu corpo e em seu nome. Nós fizemos os\n
      fantasmas. Todos os que passam pela nossa cabeça. Alguns são\n
      obrigatórios. Por exemplo o da Escocesa com a sombrinha."`

      let subtext = `
        Os gigantes da montanha é uma obra póstuma, levada à cena\n
        pela primeira vez no Giardino di Boboli, em Florença, du-\n
        rante o "Maggio Fiorentino" de 1937 sob a direção de Rena-\n
        to Simoni.`

      let explicacao = `
            Esta obra foi publicada por etapas. E as primeiras notícias\n
        de sua composição vieram em setembro de 1928, quando Pirandello\n
        estava partindo para a Alemanha, país onde viveu até\n
        1930.\n`

        let maisExplicacao = `
        No entanto, esta foi a última produção pirandelliana e uma\n
        verdadeira síntese do que é considerado a sua melhor poesia,\n
        pois retrata questões sobre a vida e a arte. "Os gigantes" nunca\n
        foi terminada. Composta por três atos, o último foi ditado à seu\n
        filho no leito de morte.`
      
      let rabetti = `
        "Quanto ao nível poético, devo dizer que a poesia de \n
        Pirandello é transbordante a ponto de não se limitar às falas dos\n
        personagens, espraiando-se pelas numerodas e extensas rubricas\n
        iniciais de cada episódio que, além de fornecerem indicações de \n
        cena, reiteram o lirismo que perpassa o texto como um todo.`
      return (
        <Fragment>
          <div className="title">
            <h1>Os Gigantes da Montanha</h1>
            <h3>de Luigi Pirandello</h3>
          </div>
          <div className="obraDiv">
            <div className="books">
              <img src={livroBr} alt="livroBr" className="livroBr"></img>
              <span>Versão brasileira</span>
              <img src={livroIt} alt="livroIt" className="livroIt"></img>
              <span>Versão italiana</span>
            </div>
            <div className="text">
              <div className="citacoes">
                {
                  text.split("\n").map((i,key) => {
                    return <i key={key}>{i}</i>;
                  })
                }
              </div>
              <p>
                Texto extraído da contracapa da edição brasileira de <i>"Os gigantes <br />
                da montanha".</i>
              </p>
              <div className="citacoes">
                {
                  subtext.split("\n").map((i,key) => {
                    return <i key={key}>{i}</i>;
                  })
                }
              </div>
              <span>Rabetti, B., 2005</span>
              <br />
              <br />
              <div className="explicacao">
                {
                  explicacao.split("\n").map((i,key) => {
                    return <span key={key}>{i}</span>;
                  })
                }
              </div>
              <br />
              <div className="explicacao">
                {
                  maisExplicacao.split("\n").map((i,key) => {
                    return <span key={key}>{i}</span>;
                  })
                }
              </div>
              <br />
              <div className="citacoes">
                {
                  rabetti.split("\n").map((i,key) => {
                    return <i key={key}>{i}</i>;
                  })
                }
              </div>
              <span>Rabetti, B., 2005</span>
              <br />
            </div>
          </div>
        </Fragment>
      )
  }
}

export default Obra