import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import SearchInputUI from '../../SemanticUI/Input/SearchInputUI';
import css from './header.css';
import { connector } from '../../../store';

class Header extends Component {

  constructor(props) {
    super(props);
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
  }

  handleSearchTerm(event) {
    this.props.setNoteSearchTerm(event.target.value); // from redux
  }

  render() {
    return (
      <div className={css.header}>
        <Link to="/" className={css.logo}>BukuGajah</Link>
        <div className={css.search}>
          <form>
            <SearchInputUI
              type="text"
              placeholder="Search for notes.."
              onChange={this.handleSearchTerm}
            />
          </form>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  setNoteSearchTerm: PropTypes.func,
}

export default connector(Header);
