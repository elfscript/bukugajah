import React, { Component } from 'react';
import { Link, router } from 'react-router';
import ContentEditable from 'react-contenteditable';
import css from './editor.css';
import { IconUI } from '../../components/SemanticUI';

const ActionBadge = (props) => {
  let badgeColor = css.greenBadge;
  if (props.type === 'saved') {
    badgeColor = css.greenBadge;
  }
  if (props.type === 'deleted') {
    badgeColor = css.redBadge;
  }
  return (
    <div className={`${css.actionBadge} ${badgeColor}`}>{props.value}</div>
  );
};

ActionBadge.propTypes = {
  value: React.PropTypes.string,
  type: React.PropTypes.string,
}

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteTitle: 'Untitled Note',
      newNoteContent: '',
      noteWords: 0,
      currentSavedNoteContent: '',
      hasChanges: 1,
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

  handleNoteSave() {
    if (this.state.newNoteTitle === '') {
      this.setState({ newNoteValidation: { isTitleEmpty: true } });
      setTimeout(() => this.setState({ newNoteValidation: { isTitleEmpty: false } }), 1000);
    } else if (this.state.newNoteDescription === '') {
      this.setState({ newNoteValidation: { isContentEmpty: true } });
      setTimeout(() => this.setState({ newNoteValidation: { isContentEmpty: false } }), 1000);
    } else {
      this.setState({ hasBeenSaved: true });
      setTimeout(() => { this.setState({ hasBeenSaved: false }) }, 1000);
    }
  }

  handleNoteDelete() {
    this.setState({ hasBeenDeleted: true });
    setTimeout(() => { this.setState({ hasBeenDeleted: false }); router.push('/'); }, 1000);
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
        {
          this.state.hasBeenSaved ?
            <ActionBadge value="your note has been saved!" type="saved" />
            : null
        }
        {
          this.state.hasBeenDeleted ?
            <ActionBadge value="your note has been deleted!" type="deleted" />
            : null
        }
        {
          this.state.newNoteValidation.isTitleEmpty ?
            <ActionBadge value="title must be filled!" type="deleted" />
            : null
        }
        {
          this.state.newNoteValidation.isContentEmpty ?
            <ActionBadge value="content must be filled!" type="deleted" />
            : null
        }
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
          <Link className={css.editorButton} onClick={this.handleNoteSave}>
            <IconUI name="save" className={css.icon} />
            <h6>Save</h6>
          </Link>
          <div className={css.editorButton}>
            <IconUI name="image" className={css.icon} />
            <h6>Image</h6>
          </div>
          <div className={css.editorButton}>
            <IconUI name="marker" className={css.icon} />
            <h6>Location</h6>
          </div>
          <div className={css.editorButton}>
            <IconUI name="tag" className={css.icon} />
            <h6>Tags</h6>
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
