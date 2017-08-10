import React, { Component } from 'react';

import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <a
          className="header__mainpage-link"
          href="http://merixstudio.com"
        />
        <h1 className="header__title">{this.props.title}</h1>
        <div className="header__decorator">
          <div className="header__decorator-left" />
          <div className="header__decorator-right" />
        </div>
      </header>
    );
  }
}
