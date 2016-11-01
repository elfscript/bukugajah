import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import css from './header.css'

const Header = () => (
  <div className={css.header}>
    <Link to="/" className={css.logo}>BukuGajah</Link>
    <div className={css.search}>
      <form>
        <input
          type="text"
          placeholder="search.."
        />
        <input type="submit" defaultValue="Search" />
      </form>
    </div>
    <div className={css.nav}>
      <ul>
        <Link to="/">
          <li>
            User
          </li>
        </Link>
        <Link to="/">
          <li>
            Login
          </li>
        </Link>
      </ul>
    </div>
  </div>
)

Header.propTypes = {
  setSearchTerm: PropTypes.func,
  searchTerm: PropTypes.string,
}

export default Header
