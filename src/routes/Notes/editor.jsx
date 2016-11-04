import React, { Component } from 'react';
import { Link } from 'react-router';
import ContentEditable from 'react-contenteditable';
import css from './editor.css';
import { IconUI, CustomModalUI } from '../../components/SemanticUI';
import { ActionBadgeUI } from '../../components/ReusableUI';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteTitle: 'Untitled Note',
      newNoteContent: '',
      noteWords: 0,
      currentSavedNoteTitle: '',
      currentSavedNoteContent: '',
      hasChanges: true,
      hasBeenSaved: false,
      hasBeenDeleted: false,
      newNoteValidation: {
        isTitleEmpty: false,
        isContentEmpty: false,
      },
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleNoteSave = this.handleNoteSave.bind(this);
    this.handleNoteDelete = this.handleNoteDelete.bind(this);
  }

  handleTitleChange(event) {
    const noteTitleValue = event.target.value;
    console.log('new:', noteTitleValue);
    console.log('current:', this.state.currentSavedNoteTitle);
    if (noteTitleValue !== this.state.currentSavedNoteTitle) {
      this.setState({ hasChanges: true });
    } else {
      this.setState({ hasChanges: false });
    }

    this.setState({ newNoteTitle: noteTitleValue });
  }

  handleNoteChange(event) {
    const noteValue = event.target.value;
    console.log('new:', noteValue);
    console.log('current:', this.state.currentSavedNoteContent);
    if (noteValue !== this.state.currentSavedNoteContent) {
      this.setState({ hasChanges: true });
    } else {
      this.setState({ hasChanges: false });
    }

    this.setState({ newNoteContent: noteValue });
    const countWords = event.target.value.split(' ').filter(word => word !== '&nbsp;' && word !== '&nbsp;&nbsp;');

    if (noteValue !== '') {
      this.setState({ noteWords: countWords.length });
    } else {
      this.setState({ noteWords: 0 });
    }
  }

  handleNoteSave() {
    if (this.state.newNoteTitle === '') {
      this.setState({ newNoteValidation: { isTitleEmpty: true } });
      setTimeout(() => this.setState({ newNoteValidation: { isTitleEmpty: false } }), 1000);
    } else if (this.state.newNoteContent === '') {
      this.setState({ newNoteValidation: { isContentEmpty: true } });
      setTimeout(() => this.setState({ newNoteValidation: { isContentEmpty: false } }), 1000);
    } else {
      this.setState({ hasChanges: false, currentSavedNoteTitle: this.state.newNoteTitle });
      this.setState({ hasChanges: false, currentSavedNoteContent: this.state.newNoteContent });
      this.setState({ hasBeenSaved: true });
      setTimeout(() => { this.setState({ hasBeenSaved: false }) }, 1000);
    }
  }

  handleNoteDelete() {
    this.setState({ hasBeenDeleted: true });
    setTimeout(() => { this.setState({ hasBeenDeleted: false }); this.props.history.push('/'); }, 1000);
  }


  render() {
    return (
      <div>
        {
          this.state.hasBeenSaved ?
            <ActionBadgeUI value="your note has been saved!" type="saved" />
            : null
        }
        {
          this.state.hasBeenDeleted ?
            <ActionBadgeUI value="your note has been deleted!" type="deleted" />
            : null
        }
        {
          this.state.newNoteValidation.isTitleEmpty ?
            <ActionBadgeUI value="title must be filled!" type="deleted" />
            : null
        }
        {
          this.state.newNoteValidation.isContentEmpty ?
            <ActionBadgeUI value="content must be filled!" type="deleted" />
            : null
        }
        <input
          className={css.titleStoryBox}
          value={this.state.newNoteTitle}
          onChange={this.handleTitleChange}
        />
        <p>
          <span className={css.wordCount}>{this.state.noteWords} Word(s) long </span>
          {
            this.state.hasChanges ?
              <span className={css.noteChangesFlag}>you have unsaved changes!</span>
              : null
          }
        </p>
        <div className={css.editorBar}>
          <Link className={css.editorButton} onClick={this.handleNoteSave}>
            <IconUI name="save" className={css.icon} />
            <h6>Save</h6>
          </Link>
          <div className={css.editorButton}>
            <CustomModalUI
              modalHeader="Upload Image"
              modalDescriptionHeader="Upload Image Here"
              modalDescription="test 123"
            >
              <div>
                <IconUI name="image" className={css.icon} />
                <h6>Image</h6>
              </div>
            </CustomModalUI>
          </div>
          <div className={css.editorButton}>
            <CustomModalUI
              modalHeader="Add Location"
              modalDescriptionHeader="add location"
              modalDescription="test 123"
            >
              <div>
                <IconUI name="marker" className={css.icon} />
                <h6>Location</h6>
              </div>
            </CustomModalUI>
          </div>
          <div className={css.editorButton}>
            <CustomModalUI
              modalHeader="Add Tags"
              modalDescriptionHeader="add tag"
              modalDescription="test 123"
            >
              <div>
                <IconUI name="tag" className={css.icon} />
                <h6>Tags</h6>
              </div>
            </CustomModalUI>
          </div>
          <Link className={css.editorDanger} onClick={this.handleNoteDelete}>
            <IconUI name="trash" className={css.icon} />
            <h6>Delete</h6>
          </Link>
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
