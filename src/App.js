import 'materialize-css/dist/css/materialize.min.css';

import React, { Component } from 'react';
import Header from './views/layout/Header';
import Footer from './views/layout/Footer';

import Weather from './views/components/Weather';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Weather />
        <Footer />
      </div>
    );
  }
}

export default App;
