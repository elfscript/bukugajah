import React, { Component } from 'react';
import css from './index.css';

import Sidebar from './sidebar';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteBool: false,
    }
  }

  render() {
    return (
      <div>
        <Sidebar />
        <div className={css.content}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

Notes.propTypes = {
  children: React.PropTypes.element,
}

export default Notes;
