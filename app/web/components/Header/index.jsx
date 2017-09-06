import React from 'react';

import './Header.scss';

export default ({
  title,
}) => (
  <header className="header">
    <a
      className="header__mainpage-link"
      href="http://merixstudio.com"
    > Merixstudio </a>
    <h1 className="header__title">{title}</h1>
    <div className="header__decorator">
      <div className="header__decorator-left" />
      <div className="header__decorator-right" />
    </div>
  </header>
);
