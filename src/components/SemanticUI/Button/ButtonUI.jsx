import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

const ButtonUI = props => (
  <Button onClick={props.handleClick} className={props.className}>
    { props.children }
  </Button>
  );

ButtonUI.propTypes = {
  children: PropTypes.string,
  handleClick: PropTypes.func,
  className: PropTypes.string,
}

export default ButtonUI;
