import { dispatch } from 'redux';
import * as ActionTypes from './constants';

export const setNoteSearchTerm = (noteSearchTerm) => {
  dispatch({
    type: ActionTypes.SET_NOTE_SEARCH_TERM,
    text: 'set search term for notes',
    value: noteSearchTerm,
  })
};

export const addNote = (newNotesData) => {
  dispatch({
    type: ActionTypes.ADD_NOTE,
    text: 'add a new note',
    value: newNotesData,
  })
};

export const updateNote = (updatedNotesData) => {
  dispatch({
    type: ActionTypes.UPDATE_NOTE,
    text: 'update a note',
    value: updatedNotesData,
  })
};

export const deleteNote = (deletedNoteId) => {
  dispatch({
    type: ActionTypes.DELETE_NOTE,
    text: 'delete a note',
    value: deletedNoteId,
  })
};
