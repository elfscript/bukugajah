import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import * as ActionTypes from '../actions/constants';
import {
  setNoteSearchTerm,
  addNote,
  updateNote,
  deleteNote,
} from '../actions';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  compose(
    typeof window === 'object'
    && typeof window.devToolsExtension !== 'undefined' ?
      window.devToolsExtension() : func => func
  )
);

const mapStateToProps = state => ({
  notesData: state.notesData,
  noteSearchTerm: state.noteSearchTerm,
});

const mapDispatchToProps = dispatch => ({
  setNoteSearchTerm: noteSearchTerm => dispatch(setNoteSearchTerm(noteSearchTerm)),
  addNote: newNotesData => dispatch(addNote(newNotesData)),
  updateNote: updatedNotesData => dispatch(updateNote(updatedNotesData)),
  addNodeleteNotete: deletedNoteDataId => dispatch(deleteNote(deletedNoteDataId)),
  fetchNotes: () => {
    dispatch({
      type: ActionTypes.FETCH_NOTES,
      text: 'fetch from server',
    });
  },
  requestNotes: (notesData) => {
    dispatch({
      type: ActionTypes.REQUEST_NOTES,
      text: 'receive from server',
      value: notesData,
    });
  },
  receiveNotes: (notesData) => {
    dispatch({
      type: ActionTypes.RECEIVE_NOTES,
      text: 'receive from server',
      value: notesData,
    });
  },
});


export const connector = connect(mapStateToProps, mapDispatchToProps)
