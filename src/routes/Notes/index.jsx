import React, { Component } from 'react';
import css from './index.css';

import Sidebar from './sidebar';
import Editor from './editor';
import ContentDefault from './contentDefault';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteBool: false,
    }

    this.setNewNote = this.setNewNote.bind(this);
  }

  setNewNote(newNoteBool) {
    this.setState({ newNoteBool: true });
  }

  render() {
    if (this.state.newNoteBool === true) {
      return (
        <div>
          <Sidebar />
          <div className={css.content}>
            <Editor />
          </div>
        </div>
      );
    }

    return (
      <div>
        <Sidebar />
        <div className={css.content}>
          <ContentDefault handleSetNewNote={this.setNewNote} />
        </div>
      </div>
    );
  }
}

export default Notes;
