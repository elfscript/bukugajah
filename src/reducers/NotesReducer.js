import * as ActionTypes from '../constants';

const notesData = require('json!../../public/notes.json');

const initialState = { notesData };

const getNotes = state => state;

const NotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_NOTES:
      return getNotes(state)
    default:
      return state
  }
}

export default NotesReducer;
