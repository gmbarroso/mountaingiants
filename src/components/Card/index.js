import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './style.css'

class Card extends Component {
  render () {
    const {
      children,
    } = this.props

    return (
      <div className="card">
        {children}
      </div>
    )
  }
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
}

Card.defaultProps = {
  children: null,
}

export default Card;
