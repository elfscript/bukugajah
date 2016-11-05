import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { store } from './store';

ReactDOM.render(
  <AppContainer store={store} />,
  document.getElementById('app')
);
