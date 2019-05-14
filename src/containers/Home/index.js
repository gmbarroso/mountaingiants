import React, { Component } from 'react';

import {
  withRouter,
} from 'react-router-dom'
import { compose } from 'ramda'

import cartaz from '../../img/cartaz.jpeg'

// import LeafletMap from '../Map'

import './style.css'

const enhance = compose(withRouter)

class Home extends Component {
  constructor (props) {
    super(props)

    this.onObraClick = this.onObraClick.bind(this)
    this.onAutorClick = this.onAutorClick.bind(this)
    this.onGiantsClick = this.onGiantsClick.bind(this)
    this.onElencoClick = this.onElencoClick.bind(this)
    this.onInspirationsClick = this.onInspirationsClick.bind(this)
  }

  onObraClick () {
    this.props.history.push('/obra')
  }

  onAutorClick () {
    this.props.history.push('/autor')
  }

  onGiantsClick () {
    this.props.history.push('/gigantes')
  }

  onElencoClick () {
    this.props.history.push('/elenco')
  }

  onInspirationsClick () {
    this.props.history.push('/inspiracoes')
  }

  render () {
    return (
      <div className="home">
        <div className="card-group">
          <div className="card livro" onClick={this.onObraClick}>
            <strong>Obra</strong>
          </div>
          <div className="card pirandello" onClick={this.onAutorClick}>
            <strong>Autor</strong>
          </div>
          <div className="card elenco" onClick={this.onElencoClick}>
            <strong>O Espetáculo</strong>
          </div>
        </div>
        <div className="card-group">
          <div className="card inspiracoes" onClick={this.onInspirationsClick}>
            <strong>Inspirações</strong>
          </div>
          <div className="card gigantes" onClick={this.onGiantsClick}>
            <strong>Os Gigantes</strong>
          </div>
        </div>
        <div className="cartaz">
          <h1>Divulgação</h1>
          <img src={cartaz} alt="cartaz" className="cartaz"></img>
        </div>
        <div>
          {/* <h2>Localização</h2> */}
          {/* <LeafletMap /> */}
        </div>
      </div>
    )
  }
}

export default enhance(Home)
