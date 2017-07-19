import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import 'whatwg-fetch';

import rootReducer from '../reducers';
import * as ActionTypes from '../actions/constants';
import * as API from '../actions/apis';
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
  addNote: (newNotesData) => {
    dispatch(addNote(newNotesData));
    fetch(API.STORE_NOTE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNotesData),
    })
      .then(response => response.json())
      .then((json) => {
        console.log('insert success!', json);
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
  },
  updateNote: (updatedNotesData) => {
    dispatch(updateNote(updatedNotesData));
    fetch(API.UPDATE_NOTE, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedNotesData),
    })
      .then(response => response.json())
      .then((json) => {
        console.log('update success!', json);
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
  },
  deleteNote: (deletedNoteDataId) => {
    dispatch(deleteNote(deletedNoteDataId));
    fetch(API.DELETE_NOTE, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: deletedNoteDataId }),
    })
      .then(response => response.json())
      .then((json) => {
        console.log('delete success!', json);
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
  },
  fetchNotes: () => {
    dispatch({
      type: ActionTypes.RECEIVE_NOTES,
      text: 'fetch from server',
      notesData: [],
    });
    fetch(API.FETCH_NOTES, {
      method: 'GET',
      mode: 'cors',
    })
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: ActionTypes.RECEIVE_NOTES,
          text: 'fetch from server',
          notesData: json,
        });
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
  },
  fetchNoteDetails: (id) => {
    dispatch({
      type: ActionTypes.FETCH_NOTE_DETAILS,
      text: 'fetch a note detail from server',
      noteData: [],
    });
    fetch(API.FETCH_NOTE_DETAILS, {
      method: 'GET',
      mode: 'cors',
    })
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: ActionTypes.FETCH_NOTE_DETAILS,
          text: 'fetch a note detail from server',
          noteData: json,
        });
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
  },

});


export const connector = connect(mapStateToProps, mapDispatchToProps);
