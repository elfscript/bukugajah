import React, { PropTypes } from 'react';
import { Icon } from 'semantic-ui-react';

const IconUI = props => (
  <Icon name={props.name} className={props.className} />
)

IconUI.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
}

export default IconUI;
