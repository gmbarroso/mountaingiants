import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { isNil } from 'ramda'

import './style.css'

const createRipple = (e) => {
  const {
    clientX,
    clientY,
    currentTarget,
  } = e

  const { offsetHeight, offsetWidth } = currentTarget
  const { left, top } = currentTarget.getBoundingClientRect()

  const rippleSize = Math.max(offsetHeight, offsetWidth)
  const centralize = rippleSize / 2
  const rippleX = (clientX || 0) - (left || 0) - (centralize || 0)
  const rippleY = (clientY || 0) - (top || 0) - (centralize || 0)

  return {
    rippleHeight: rippleSize,
    rippleWidth: rippleSize,
    rippleX,
    rippleY,
  }
}

class Card extends Component {
  constructor () {
    super()

    this.state = {
      rippleX: 0,
      rippleY: 0,
      rippleHeight: 0,
      rippleWidth: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    const {
      rippleHeight,
      rippleWidth,
      rippleX,
      rippleY,
    } = createRipple(e)

    this.setState({
      rippleX,
      rippleY,
      rippleHeight,
      rippleWidth,
    })

    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render () {
    const {
      children,
    } = this.props

    const {
      rippleHeight,
      rippleWidth,
      rippleX,
      rippleY,
    } = this.state

    return (
      <div
        className={"card"}
        onClick={this.handleClick}
      >
        {!isNil(children) && <span>{children}</span>}

        <strong
          style={{
            height: rippleHeight,
            left: rippleX,
            top: rippleY,
            width: rippleWidth,
          }}
        />
      </div>
    )
  }
}


Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
}

Card.defaultProps = {
  children: null,
  onclick: null,
}

export default Card;
