import React, { PropTypes } from 'react';
import { Input } from 'semantic-ui-react';

const InputUI = props => (
  <Input placeholder={props.placeholder} />
);

InputUI.propTypes = {
  placeholder: PropTypes.string,
};

export default InputUI;
