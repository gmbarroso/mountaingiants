import React, { Component } from 'react';

import facebook from '../../img/facebook_icon.svg'
import instagram from '../../img/Instagram_logo.svg'

import {
  withRouter,
} from 'react-router-dom'
import { compose } from 'ramda'

import Button from '../../components/Button'

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
        <h1>Grupo TECE</h1>
        <div className="links">
          <Button onClick={this.onHomeClick} >Home</Button>
          <Button onClick={this.onObraClick}>Obra</Button>
          <Button onClick={this.onAutorClick}>Autor</Button>
          <Button onClick={this.onGiantsClick}>Os Gigantes</Button>
          <Button onClick={this.onElencoClick}>O Espetáculo</Button>
          <Button onClick={this.onInspirationsClick}>Inspirações</Button>
        </div>
        <div className="logos">
          <a 
            href="https://www.facebook.com/events/519848468546844/?ti=icl"
            target="_blank"
            rel="noopener noreferrer"
          >
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

export default enhance(Header);