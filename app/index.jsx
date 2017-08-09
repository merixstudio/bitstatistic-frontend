import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider
} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from './store';

injectTapEventPlugin();

const store = configureStore();

const rootElement = document.getElementById('app');

const app = (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <p>Bitstatistics</p>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(
  app,
  rootElement,
);
