import React from 'react';
import { Provider } from 'react-redux';

import Routes from '../routes';

const AppContainer = props => (
  <Provider store={props.store}>
    {Routes}
  </Provider>
);

/*
AppContainer.propTypes = {
  store: PropTypes.object,
}
*/

export default AppContainer;
