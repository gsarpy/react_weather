import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue">
          <a href="/" className="brand-logo">React Weather</a>
          <ul id="nav-mobile" className="right hide-on-sm-and-down">
            <li><a href="collapsible.html">Link</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
