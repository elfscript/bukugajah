import React, { PropTypes } from 'react';
import { Input } from 'semantic-ui-react';

const InputUI = props => (
  <Input className={props.className} placeholder={props.placeholder} />
);

InputUI.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default InputUI;
