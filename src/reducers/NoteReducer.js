import * as ActionTypes from '../constants';
import notesData from '../../public/notes.json';

const initialState = { notesData };

const setSearchTerm = (state = initialState, action) => {
  return state.filter(note => note.title.includes(action.value));
}

const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_NOTE_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default NoteReducer
