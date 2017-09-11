import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './styles/theme';

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
    <MuiThemeProvider muiTheme={theme}>
      <div>
        <Header title="Bitstatistics" />
        <Statistics />
      </div>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(
  app,
  rootElement,
);
