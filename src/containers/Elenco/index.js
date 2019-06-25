import React, { Component, Fragment } from 'react'

import todos from '../../img/todos.JPG'
import trupe from '../../img/trupe.JPG'
import vila from '../../img/vila.JPG'
import filipeta from '../../img/filipeta.png'
import condeilse from '../../img/condeilse.JPG'
import cotrone from '../../img/cotrone.JPG'
import madalena from '../../img/madalena.JPG'
import todos1 from '../../img/todos1.JPG'
import todos2 from '../../img/todos2.JPG'
import oradores from '../../img/oradores.JPG'
import sgriciamara from '../../img/sgriciamara.JPG'
import maquiagem1 from '../../img/maquiagem1.JPG'
import maquiagem2 from '../../img/maquiagem2.JPG'
import madalenatrio from '../../img/madalenatrio.JPG'
import narradores2 from '../../img/narradores2.JPG'
import palco from '../../img/palco.JPG'
import palco2 from '../../img/palco2.JPG'
import palco3 from '../../img/palco3.JPG'
import palco4 from '../../img/palco4.JPG'
import palco5 from '../../img/palco5.JPG'
import palco6 from '../../img/palco6.JPG'
import palco7 from '../../img/palco7.JPG'
import peca1 from '../../img/peca1.JPG'
import peca2 from '../../img/peca2.JPG'
import peca3 from '../../img/peca3.JPG'
import peca4 from '../../img/peca4.JPG'
import peca5 from '../../img/peca5.JPG'
import peca6 from '../../img/peca6.JPG'
import peca7 from '../../img/peca7.JPG'
import peca8 from '../../img/peca8.JPG'
import peca9 from '../../img/peca9.JPG'
import peca10 from '../../img/peca10.JPG'
import peca11 from '../../img/peca11.JPG'
import peca12 from '../../img/peca12.JPG'





import './style.css'

class Elenco extends Component {   
   
    render () {
      let text = `
          O Grupo Tece foi fundado em 2014, com a intenção de atender a demanda de artistas que não tinham espaço ou\n
          representação coletiva. Onde podemos produzir nossos Projetos através de pesquisa de linguagem, dramaturgia\n
          e experimentação cênicas, fortalecendo nosso repertório. E, sobretudo, nos legitimar como coletivo de artistas em\n
          busca de manter uma continuidade de trabalho em projetos teatrais.`
      
      let aOficina = `
      A Oficina de Atores é um curso de teatro com escolas no Rio de Janeiro - RJ, São Paulo - SP, Jundiaí - SP, Santos - SP\n
      e Campinas - SP. O objetivo do curso é desenvolver referenciais para as práticas vocais e físicas dos alunos, assim como\n
      reconhecer e suavizar suas dificuldades, estimular suas potencialidades e aumentar sua extensão vocal e flexibilidade\n
      corporal.\n
      Possibilitar ao aluno o conhecimento de estilos variados de atuação, assim como a análise de criação de personagens e\n
      estudo de textos dramáticos. Instigar o lado "ator-criador" de cada aluno.`

      let elenco = `
        Alberto Paulo, Jéssica Bispo, João  Porto, Guilherme Barroso,\n
        Amanda Morais, Gisele Rebello, Jéssica Lopes, Mariana Brasil, Bianca Paixão, Maysa Martins, Kelly Danielle,\n
        Guilherme Gorgulho, Humberto Grisi, Jefferson Jesus, Sthefannie Dorneles, Thays Freitas,\n
        Natasha Amaral, Luana Leal, Darly Vieira, Vânia Zancanaro, Eduardo Gondim,\n
        Katia Ganges, Arthur Baccam, Valentim Santos.`

      return (
        <Fragment>
          <div className="title">
            <h1>Elenco de <i>Os Gigantes da montanha</i></h1>
            <h3>Quem somos?</h3>
          </div>
          <div className="elencoDiv">
            <div className="quemSomos">
            <h3>Grupo Tece</h3>
              <div className="oGrupo">
                {
                  text.split("\n").map((i,key) => {
                    return <span key={key}>{i}</span>;
                  })
                }
              </div>
              <h3>A Oficina de Atores</h3>
              <div className="aOficina">
                {
                  aOficina.split("\n").map((i,key) => {
                    return <span key={key}>{i}</span>;
                  })
                }
              </div>
              <div className="filipeta">
                <img src={filipeta} alt="filipeta" className="filipetaImg"></img>
                <p className="filipetaDirection"><strong>Direção: Niveo Diegues</strong></p>
                <span className="filipetaElenco">Elenco: Grupo TECE e Oficina de Atores de São Paulo - Pinheiros</span>
                <div>
                  <span><strong>TEATRO MARIA DELLA COSTA</strong> - Rua Paim, 72 - Bela Vista - São Paulo</span>
                  <span><strong>Estreia:</strong> 15 de Junho às 19h30</span>
                  <span><strong>TEMPORADA:</strong> (Sábados e Domingos)</span>
                  <span><strong>Informações:</strong> (11) 2384-9557</span>
                </div>
              </div>
              <br /><br />
              <h3>Elenco</h3>
              <div className="justifyContent">
                <div className="artistas">
                  {
                    elenco.split("\n").map((i,key) => {
                      return <p key={key}>{i}</p>;
                    })
                  }
                </div>
              </div>
              <div className="direcao">
                <p><strong>Assistentes de direção:</strong></p>
                <span>Simone Guimarães e Samuel Alves</span>
                <p><strong>Direção:</strong></p>
                <span>Niveo Diegues</span>
              </div>
            </div>
            <br /><br /><br /><br />
            <h2 className="h2">Galeria de fotos</h2>
            <div className="figurinoDiv">
              <div className="figurino1">
                <img src={peca10} alt="peca10" className="peca10"></img>
                <img src={peca11} alt="peca11" className="peca11"></img>
                <img src={peca12} alt="peca12" className="peca12"></img>
              </div>
              <div className="figurino1">
                <img src={peca7} alt="peca7" className="peca7"></img>
                <img src={peca8} alt="peca8" className="peca8"></img>
                <img src={peca9} alt="peca9" className="peca9"></img>
              </div>
              <div className="figurino1">
                <img src={peca4} alt="peca4" className="peca4"></img>
                <img src={peca5} alt="peca5" className="peca5"></img>
                <img src={peca6} alt="peca6" className="peca6"></img>
              </div>
              <div className="figurino1">
                <img src={peca1} alt="peca1" className="peca1"></img>
                <img src={peca2} alt="peca2" className="peca2"></img>
                <img src={peca3} alt="peca3" className="peca3"></img>
              </div>
              <div className="figurino1">
                <img src={palco5} alt="palco5" className="palco5"></img>
                <img src={palco6} alt="palco6" className="palco6"></img>
                <img src={palco7} alt="palco7" className="palco7"></img>
              </div>
              <div className="figurino2">
                <img src={palco2} alt="palco2" className="palco2"></img>
                <img src={palco3} alt="palco3" className="palco3"></img>
                <img src={palco4} alt="palco4" className="palco4"></img>
              </div>
              <div className="figurino3">
                <img src={madalenatrio} alt="madalenatrio" className="madalenatrio"></img>
                <img src={narradores2} alt="narradores2" className="narradores2"></img>
                <img src={palco} alt="palco" className="palco"></img>
              </div>
              <div className="figurino4">
                <img src={cotrone} alt="cotrone" className="cotrone"></img>
                <img src={condeilse} alt="condeilse" className="condeilse"></img>
                <img src={oradores} alt="oradores" className="oradores"></img>
              </div>
              <div className="figurino5">
                <img src={madalena} alt="madalena" className="madalena"></img>
                <img src={sgriciamara} alt="sgriciamara" className="sgriciamara"></img>
                <img src={maquiagem1} alt="maquiagem1" className="maquiagem1"></img>
              </div>
              <div className="figurino6">
                <img src={maquiagem2} alt="maquiagem2" className="maquiagem2"></img>
                <img src={todos1} alt="todos1" className="todos1"></img>
                <img src={todos2} alt="todos2" className="todos2"></img>
              </div>
              <div className="figurino7">
                <img src={trupe} alt="trupe" className="trupe"></img>
                <img src={todos} alt="todos" className="todos"></img>
                <img src={vila} alt="vila" className="vila"></img>
              </div>
            </div>
          </div>
        </Fragment>
      )
  }
}

export default Elenco