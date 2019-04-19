import React from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// import Card from '../../components/Card'

import './style.css'

// const mapStyles = {
//   width: '100%;',
//   height: '100%',
//   margin: '100px 100px',
//   zIndex: '1',
// };

const Home = ({ google }) => {
  // console.log(google.LatLng)
  // const { google } = props
    return (
      <div className="home">
        <div className="card-group">
          <div className="card livro">
            <strong>Obra</strong>
          </div>
          <div className="card pirandello">
            <strong>Autor</strong>
          </div>
          <div className="card elenco">
            <strong>Elenco</strong>
          </div>
        </div>
        <div className="card-group">
          <div className="card inspiracoes">
            <strong>Inspirações</strong>
          </div>
          <div className="card gigantes">
            <strong>Os Gigantes</strong>
          </div>
        </div>
        <h2>Localização</h2>
          {/* <Map
            google={google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
             lat: -23.5546951,
             lng: -46.6514999
            }}
          /> */}
      </div>

      // Usar rota sem hash
    )
}

export default Home

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDITtTQheqb5O_XTfPX9HG75TtcniJegQc'
// })(Home)