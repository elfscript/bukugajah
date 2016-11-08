import {
  createStore,
  applyMiddleware,
  compose,
}                   from 'redux';
import { connect }  from 'react-redux';
import thunk        from 'redux-thunk';
import                   'whatwg-fetch';

import rootReducer      from '../reducers';
import * as ActionTypes from '../actions/constants';
import * as API         from '../actions/apis';
import {
  setNoteSearchTerm,
  addNote,
  updateNote,
  deleteNote,
}                       from '../actions';

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
  notesData:      state.notesData,
  noteSearchTerm: state.noteSearchTerm,
});

const mapDispatchToProps = dispatch => ({
  setNoteSearchTerm:  noteSearchTerm      => dispatch(setNoteSearchTerm(noteSearchTerm)),
  addNote:            newNotesData        => dispatch(addNote(newNotesData)),
  updateNote:         updatedNotesData    => dispatch(updateNote(updatedNotesData)),
  addNodeleteNotete:  deletedNoteDataId   => dispatch(deleteNote(deletedNoteDataId)),
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
      })
  },
});


export const connector = connect(mapStateToProps, mapDispatchToProps);
