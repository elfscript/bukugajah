import React from 'react'

import Header from './Header'

const Layout = (props) => {
  const childrenStyle = {
    paddingTop: 100,
  }
  return (
    <div>
      <Header />
      <div style={childrenStyle}>
        {props.children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: React.PropTypes.element,
}

export default Layout
