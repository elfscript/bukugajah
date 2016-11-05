import * as ActionTypes from '../constants';

const initialState = require('json!../../public/notes.json');

const addNote = (state, newNoteData) => {
  let newNote = {
    id: state.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1,
    title: newNoteData.title,
    description: newNoteData.description,
    createdAt: '20-20-2016',
    updatedAt: '21-20-2016',
    tags: ['casual'],
    category: 'work',
    images: ['menma'],
  };

  return [newNote, ...state];
}

const NotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_NOTE:
      return addNote(state, action.value);
    default:
      return state;
  }
}

export default NotesReducer;
