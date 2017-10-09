import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer blue">
        <div className="container">

          <div className="footer-copyright">
            <div className="container">
            Created by <a href="http://gsarpy.com" className="grey-text text-lighten-4">Gregory Sarpy</a>
            <a className="grey-text text-lighten-4 right" href="https://github.com/gsarpy/react_weather">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
