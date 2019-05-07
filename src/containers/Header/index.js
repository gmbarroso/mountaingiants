import React, { Component } from 'react';
// import PropTypes from 'prop-types'

import facebook from '../../img/facebook_icon.svg'
import instagram from '../../img/Instagram_logo.svg'

import {
  withRouter,
} from 'react-router-dom'
import { compose } from 'ramda'

import './style.css'

const enhance = compose(withRouter)

class Header extends Component {
  constructor (props) {
    super(props)

    this.onHomeClick = this.onHomeClick.bind(this)
    this.onObraClick = this.onObraClick.bind(this)
    this.onAutorClick = this.onAutorClick.bind(this)
    this.onGiantsClick = this.onGiantsClick.bind(this)
    this.onElencoClick = this.onElencoClick.bind(this)
    this.onInspirationsClick = this.onInspirationsClick.bind(this)
  }

  onHomeClick () {
    this.props.history.push('/mountaingiants')
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
      <div className="header">
        <h1>Grupo Tece</h1>
        <div className="links">
          <span className="link" onClick={this.onHomeClick} >Home</span>
          <span className="link" onClick={this.onObraClick}>Obra</span>
          <span className="link" onClick={this.onAutorClick}>Autor</span>
          <span className="link" onClick={this.onGiantsClick}>Os Gigantes</span>
          <span className="link" onClick={this.onElencoClick}>Elenco</span>
          <span className="link" onClick={this.onInspirationsClick}>Inspirações</span>
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
}

// Header.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func.isRequired,
//   }).isRequired,
// }

export default enhance(Header);