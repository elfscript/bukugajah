import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import SearchInputUI from '../../SemanticUI/Input/SearchInputUI'
import css from './header.css'

const Header = () => (
  <div className={css.header}>
    <Link to="/" className={css.logo}>BukuGajah</Link>
    <div className={css.search}>
      <form>
        <SearchInputUI type="text" />
      </form>
    </div>
  </div>
)

Header.propTypes = {
  setSearchTerm: PropTypes.func,
  searchTerm: PropTypes.string,
}

export default Header
