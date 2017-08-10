import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';

import {
  Header,
} from './components';

injectTapEventPlugin();

const rootElement = document.getElementById('app');

const app = (
  <div>
    <Header title="Bitstatistics" />
  </div>
);

ReactDOM.render(
  app,
  rootElement,
);
