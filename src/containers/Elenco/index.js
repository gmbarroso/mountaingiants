import React, { Component, Fragment } from 'react'

import './style.css'

class Elenco extends Component {   
   
    render () {
      let text = `
          O Grupo Tece foi fundado em 2014, com a intenção de atender a demanda de artistas que não tinham espaço ou\n
          ou representação coletiva. Onde podemos produzir nossos Projetos através de pesquisa de linguagem, dramaturgia\n
          e experimentação cênicas, fortalecendo nosso repertório. E, sobretudo, nos legitimar como coletivo de artistas em\n
          busca de maner uma continuidade de trabalho em projetos teatrais.`
      
      let aOficina = `
      A Oficina de Atores é um curso de teatro com escolas no Rio de Janeiro - RJ, São Paulo - SP, Jundiaí - SP, Santos - SP\n
      e Campinas - SP. O objetivo do curso é desenvolver referenciais para as práticas vocais e físicas dos alunos, assim como\n
      reconhecer e suavizar suas dificuldades, estimular suas potencialidades e aumentar sua extensão vocal e flexibilidad\n
      corporal.\n
      Possibilitar ao aluno o conhecimento de estilos variados de atuação, assim como a análise de criação de personagens e\n
      estudo de textos dramáticos. Instigar o lado "ator-criador" de cada aluno.`

      let elenco = `
        Alberto Paulo, Jéssica Bispo, João  Porto, Guilherme Barroso,\n
        Amanda Martins, Gisele Rebello, Jéssica Lopes, Mariana Brasil, Bianca Paixão, Maysa Martins, Kelly Danielle,\n
        Guilherme Gorgulho, Humberto Antonio, Jefferson Jesus, Sthefannie Dorneles, Thais Freitas,\n
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
          </div>
        </Fragment>
      )
  }
}

export default Elenco