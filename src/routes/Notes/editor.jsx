import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ContentEditable from 'react-contenteditable';
import css from './editor.css';
import { IconUI, CustomModalUI } from '../../components/SemanticUI';
import { ActionBadgeUI } from '../../components/ReusableUI';
import { connector } from '../../store';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteTitle: '',
      newNoteContent: '',
      thisNoteId: 0,
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

  componentDidMount() {
    // Update on Component Mount
    const id = this.props.params.id;
    if (id === undefined) {
      this.setState({
        newNoteTitle: 'Untitled Note',
        newNoteContent: '',
        thisNoteId: 0,
      });
    } else {
      const currentNoteDataIndex = this.props.notesData.map(note => note.id).indexOf(id);
      if (currentNoteDataIndex !== -1) {
        const currentNoteData = this.props.notesData[currentNoteDataIndex];
        this.setState({
          newNoteTitle: currentNoteData.title,
        });
      } else {
        console.log('404 NOT FOUND!');
      }
    }
  }

  componentWillReceiveProps(newProps) {
    // Update on Changes in Notes Link
    const id = newProps.params.id;
    if (id === undefined) { // IF no id added / no unique id = new note in editor
      this.setState({
        newNoteTitle: 'Untitled Note',
        newNoteContent: '',
        thisNoteId: 0,
      });
    } else { // IF id is defined = load current note in editor
      const currentNoteDataIndex = this.props.notesData
        .map(note => note.id)
        .indexOf(parseInt(id, 10));
      if (currentNoteDataIndex !== -1) {
        const currentNoteData = this.props.notesData[currentNoteDataIndex];
        this.setState({
          newNoteTitle: currentNoteData.title,
          newNoteContent: currentNoteData.description,
          thisNoteId: currentNoteData.id,
        });
      } else {
        console.log('404 NOT FOUND!');
      }
    }
  }

  handleTitleChange(event) {
    const noteTitleValue = event.target.value;
    if (noteTitleValue !== this.state.currentSavedNoteTitle) {
      this.setState({ hasChanges: true });
    } else {
      this.setState({ hasChanges: false });
    }

    this.setState({ newNoteTitle: noteTitleValue });
  }

  handleNoteChange(event) {
    const noteValue = event.target.value;
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
    if (this.state.newNoteTitle === '') { // Title is empty
      this.setState({ newNoteValidation: { isTitleEmpty: true } });
      setTimeout(() => this.setState({ newNoteValidation: { isTitleEmpty: false } }), 1000);
    } else if (this.state.newNoteContent === '') { // Content is empty
      this.setState({ newNoteValidation: { isContentEmpty: true } });
      setTimeout(() => this.setState({ newNoteValidation: { isContentEmpty: false } }), 1000);
    } else if (this.state.thisNoteId === 0) { // Editor is in "New Note" mode.
      this.setState({ hasChanges: false, currentSavedNoteTitle: this.state.newNoteTitle });
      this.setState({ hasChanges: false, currentSavedNoteContent: this.state.newNoteContent });

      this.props.addNote({
        title: this.state.newNoteTitle,
        description: this.state.newNoteContent.replace(/&nbsp;/g, ' '),
      }) // from redux

      this.setState({ hasBeenSaved: true }); // Show Saved button
      setTimeout(() => { this.setState({ hasBeenSaved: false }) }, 1000);
    } else { // Editor is in "Update Note" mode.
      this.setState({ hasBeenSaved: true }); // Show Saved button

      this.props.updateNote({
        id: this.state.thisNoteId,
        title: this.state.newNoteTitle,
        description: this.state.newNoteContent.replace(/&nbsp;/g, ' '),
      }) // from redux

      console.log('prop update!');
      setTimeout(() => { this.setState({ hasBeenSaved: false }) }, 1000);
    }
  }

  handleNoteDelete() {
    this.setState({ hasBeenDeleted: true });
    if (this.state.thisNoteId !== 0) { // IF current Editor is in Edit Mode.
      console.log('has been deleted!');
    }
    setTimeout(() => {
      this.setState({ hasBeenDeleted: false });
      this.props.history.push('/');
    }, 1000);
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
          <span>{this.state.thisNoteId}</span>
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

Editor.propTypes = {
  addNote: PropTypes.func,
  updateNote: PropTypes.func,
}

export default connector(Editor);
