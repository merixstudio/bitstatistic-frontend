import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

import { Provider } from 'mobx-react';
import stores from '../stores';

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
