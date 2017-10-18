import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { MuiThemeProvider } from 'material-ui/styles';

import theme from './styles/theme';
import stores from '../stores';
import { Header } from './components';
import { Statistics } from './containers';

import './styles/main.scss';


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
