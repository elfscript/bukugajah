import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Layout from '../components/Layout/index';
import Notes from './Notes';
import Users from './Users';

export default <Router history={hashHistory}>
  <Route
    path="/"
    component={Layout}
  >
    <IndexRoute
      component={Notes}
    />
    <Route
      path="/users"
      component={Users}
    />
  </Route>
</Router>;
