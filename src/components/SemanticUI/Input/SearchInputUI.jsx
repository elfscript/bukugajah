import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchInputUI = props => (
  <Input icon="search" placeholder={props.placeholder} onChange={props.onChange} />
);

SearchInputUI.propTypes = {
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

export default SearchInputUI
