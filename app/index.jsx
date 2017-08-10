import React from 'react';
import ReactDOM from 'react-dom';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const rootElement = document.getElementById('app');

const app = (
  <div>
    <p>Bitstatistics</p>
  </div>
);

ReactDOM.render(
  app,
  rootElement,
);
