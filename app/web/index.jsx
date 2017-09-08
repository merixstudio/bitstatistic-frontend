import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

import stores from '../stores';

import './styles/main.scss';

import {
  Header,
} from './components';

import {
  Statistics,
} from './containers';

const rootElement = document.getElementById('app');

const app = (
  <Provider
    ui={stores.ui}
    charts={stores.charts}
  >
    <div>
      <Header title="Bitstatistics" />
      <Statistics />
    </div>
  </Provider>
);

ReactDOM.render(
  app,
  rootElement,
);
