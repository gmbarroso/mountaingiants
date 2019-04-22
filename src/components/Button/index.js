import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
import { isNil } from 'ramda'

// import ThemeConsumer from '../../ThemeConsumer'

import './style.css'

// const consumeTheme = ThemeConsumer('UIButton')

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

class Button extends PureComponent {
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
      icon,
      iconAlignment,
      theme,
    } = this.props

    const {
      rippleHeight,
      rippleWidth,
      rippleX,
      rippleY,
    } = this.state

    // const buttonClasses = classNames(
    //   theme.button,
    //   {
    //     [theme.iconButton]: !isNil(icon) && isNil(children),
    //   }
    // )

    return (
      <button
        className={"button"}
        onClick={this.handleClick}
      >
        {(!isNil(icon) && iconAlignment === 'start') && icon}
        {!isNil(children) && <span>{children}</span>}
        {(!isNil(icon) && iconAlignment === 'end') && icon}

        <span
          className=''
          style={{
            height: rippleHeight,
            left: rippleX,
            top: rippleY,
            width: rippleWidth,
          }}
        />
      </button>
    )
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
  icon: PropTypes.element,
  iconAlignment: PropTypes.oneOf([
    'start', 'end',
  ]),
}

Button.defaultProps = {
  children: null,
  onClick: null,
  icon: null,
  iconAlignment: 'start',
}

export default Button