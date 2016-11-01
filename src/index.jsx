import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';

const store = {}; // Not yet used.. its fandy's job. LOL

ReactDOM.render(
  <AppContainer store={store} />,
  document.getElementById('app')
);
