import * as ActionTypes from '../constants';

export const setNoteSearchTerm = (noteSearchTerm) => {
  dispatch({
    type: ActionTypes.SET_NOTE_SEARCH_TERM,
    text: 'set search term for notes',
    value: noteSearchTerm
  })
};
