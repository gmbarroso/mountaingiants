import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Header from '../../containers/Header'
import Footer from '../../containers/Footer'

import {
  Route,
  withRouter,
} from 'react-router-dom'
import { compose } from 'ramda'

import Home from '../../containers/Home'

const enhance = compose(withRouter)

class Root extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Route path="/home" component={Home} />
        <Footer />
      </Fragment>
    )
  }
}

Root.propTypes = {
  history: PropTypes.shape({
    listen: PropTypes.func,
  }).isRequired,
}

export default enhance(Root)
