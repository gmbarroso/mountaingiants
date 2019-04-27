import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

import {
  withRouter,
} from 'react-router-dom'
import { compose } from 'ramda'

// import Card from '../../components/Card'

import './style.css'

// const mapStyles = {
//   width: '100%;',
//   height: '100%',
//   margin: '100px 100px',
//   zIndex: '1',
// };

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
          <div className="card elenco" onClick={this.onGiantsClick}>
            <strong>Elenco</strong>
          </div>
        </div>
        <div className="card-group" onClick={this.onElencoClick}>
          <div className="card inspiracoes">
            <strong>Inspirações</strong>
          </div>
          <div className="card gigantes" onClick={this.onInspirationsClick}>
            <strong>Os Gigantes</strong>
          </div>
        </div>
      </div>
    )
  }
}

export default enhance(Home)


// = ({ google }) => {
  // console.log(google.LatLng)
  // const { google } = props
//     return (
//       <div className="home">

//         <h2>Localização</h2>
//           {/* <Map
//             google={google}
//             zoom={14}
//             style={mapStyles}
//             initialCenter={{
//              lat: -23.5546951,
//              lng: -46.6514999
//             }}
//           /> */}
//       </div>

//       // Usar rota sem hash
//     )
// }

// export default Home

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDITtTQheqb5O_XTfPX9HG75TtcniJegQc'
// })(Home)