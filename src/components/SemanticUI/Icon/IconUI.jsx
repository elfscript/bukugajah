import React, { PropTypes } from 'react';
import { Icon } from 'semantic-ui-react';

const IconUI = props => (
  <Icon name={props.name} />
)

IconUI.propTypes = {
  name: PropTypes.string,
}

export default IconUI;
