import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

import {
  Header,
} from './components';

import {
  Statistics,
} from './containers';

const rootElement = document.getElementById('app');

const app = (
  <div>
    <Header title="Bitstatistics" />
    <Statistics />
  </div>
);

ReactDOM.render(
  app,
  rootElement,
);
