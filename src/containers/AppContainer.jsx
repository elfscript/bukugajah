import React, { Proptypes } from 'react';
import { Provider }         from 'react-redux';

import Routes from '../routes';

const AppContainer = props => (
  <Provider store={props.store}>
    {Routes}
  </Provider>
);

export default AppContainer;
