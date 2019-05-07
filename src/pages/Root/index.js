import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Header from '../../containers/Header'
import Obra from '../../containers/Obra'
import Autor from '../../containers/Autor'
import Elenco from '../../containers/Elenco'
import Inspirations from '../../containers/Inspirations'
import Giants from '../../containers/Giants'
import Footer from '../../containers/Footer'

import {
  Route,
  Switch,
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/obra" component={Obra} />
            <Route path="/autor" component={Autor} />
            <Route path="/elenco" component={Elenco} />
            <Route path="/inspiracoes" component={Inspirations} />
            <Route path="/gigantes" component={Giants} />
          </Switch>
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
