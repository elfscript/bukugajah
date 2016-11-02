import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';
import css from './editor.css';
import { IconUI } from '../../components/SemanticUI';


class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteTitle: 'Untitled Note',
      newNoteContent: '',
      noteWords: 0,
      currentSavedNoteContent: '',
      hasChanges: 1,
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ newNoteTitle: event.target.value });
  }

  handleNoteChange(event) {
    const noteValue = event.target.value;
    this.setState({ newNoteContent: noteValue });
    const countWords = event.target.value.split(' ').filter(word => word !== '');
    if (noteValue !== '') {
      this.setState({ noteWords: countWords.length });
    } else {
      this.setState({ noteWords: 0 });
    }
  }

  render() {
    let changesFlag = () => <div>asda</div>;

    if (this.state.hasChanges === 1) {
      changesFlag = () => (
        <span className={css.noteChangesFlag}>you have unsaved changes!</span>
      );
    }

    return (
      <div>
        <input
          className={css.titleStoryBox}
          value={this.state.newNoteTitle}
          onChange={this.handleTitleChange}
        />
        <p>
          <span className={css.wordCount}>{this.state.noteWords} Word(s) long </span>
          {changesFlag}
        </p>
        <div className={css.editorBar}>
          <div>
            <IconUI name="save" className={css.icon} />
            <h6>Save</h6>
          </div>
          <div>
            <IconUI name="image" className={css.icon} />
            <h6>Image</h6>
          </div>
          <div>
            <IconUI name="marker" className={css.icon} />
            <h6>Location</h6>
          </div>
          <div>
            <IconUI name="tag" className={css.icon} />
            <h6>Tags</h6>
          </div>
          <div className={css.editorDanger}>
            <IconUI name="trash" className={css.icon} />
            <h6>Delete</h6>
          </div>
        </div>
        <ContentEditable
          className={css.bigStoryBox}
          onChange={this.handleNoteChange}
          html={this.state.newNoteContent}
          data-placeholder="Enter Note here... enjoy the blissful moment of writing..."
        />
      </div>
    );
  }
}

export default Editor;
