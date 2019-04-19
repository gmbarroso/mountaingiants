import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './containers/Home';

// const mapStyles = {
//   width: '100%',
// };

class App extends Component {
  render() {
    // console.log(typeof(this.props.google))
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
        <div>
          {/* <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
             lat: -23.5546951,
             lng: -46.6514999
            }}
          /> */}
        </div>
      </div>
    );
  }
}

export default App;

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAZdk4O1Jn5DCSzjK4xDxyhrCOnJGc0zoE'
// })(App)
