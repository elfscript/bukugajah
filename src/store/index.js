import { createStore } from 'redux'
import { connect } from 'react-redux'

import rootReducer from '../reducers'
import * as ActionTypes from '../constants'

/*
BELOW IS ONLY FOR PRODUCTION
*/
export const store = createStore(rootReducer);

// BELOW IS FOR DEVELOPMENT
/* export const store = createStore(
    rootReducer,
    initialState,
    compose(
      typeof window === 'object'
      && typeof window.devToolsExtension !== 'undefined' ?
        window.devToolsExtension() : (func) => func
))*/

const mapStateToProps = state => ({
  notesData: state.notesData,
  noteSearchTerm: state.noteSearchTerm,
});

const mapDispatchToProps = dispatch => ({
  setNoteSearchTerm: (noteSearchTerm) => {
    dispatch({
      type: ActionTypes.SET_NOTE_SEARCH_TERM,
      text: 'set search term for notes',
      value: noteSearchTerm,
    })
  },
  addNote: (newNotesData) => {
    dispatch({
      type: ActionTypes.ADD_NOTE,
      text: 'add a new note',
      value: newNotesData,
    })
  },
  updateNote: (updatedNotesData) => {
    dispatch({
      type: ActionTypes.UPDATE_NOTE,
      text: 'update a note',
      value: updatedNotesData,
    })
  },
  deleteNote: (deleteNote) => {
    dispatch({
      type: ActionTypes.DELETE_NOTE,
      text: 'delete a note',
      value: deleteNote,
    })
  },
});


export const connector = connect(mapStateToProps, mapDispatchToProps)
