import * as ActionTypes from '../constants';

const initialState = '';

const setNoteSearchTerm = (state, action) => {
  let newState = '';
  newState = action.value;
  return newState;
};

const NoteSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_NOTE_SEARCH_TERM:
      return setNoteSearchTerm(state, action);
    default:
      return state;
  }
}

export default NoteSearchReducer;
