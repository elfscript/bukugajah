import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

const ButtonUI = props => (
  <Button onClick={props.handleClick}>
    { props.children }
  </Button>
  );

ButtonUI.propTypes = {
  children: PropTypes.string,
  handleClick: PropTypes.func,
}

export default ButtonUI
