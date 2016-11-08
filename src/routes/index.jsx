import React  from 'react';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute,
}             from 'react-router';

import Layout         from '../components/Layout/index';
import Notes          from './Notes';
import Editor         from './Notes/editor';
import ContentDefault from './Notes/contentDefault';

export default <Router history={hashHistory}>
  <Route
    path="/"
    component={Layout}
  >
    <Route
      component={Notes}
    >
      <IndexRoute
        component={ContentDefault}
      />
      <Route
        path="/editor"
        component={Editor}
      />
      <Route
        path="/editor/:id"
        component={Editor}
      />
    </Route>
  </Route>
</Router>;
