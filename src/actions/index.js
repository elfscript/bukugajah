import * as ActionTypes from './constants';

export const setNoteSearchTerm = noteSearchTerm => ({
  type: ActionTypes.SET_NOTE_SEARCH_TERM,
  text: 'set search term for notes',
  value: noteSearchTerm,
});

export const addNote = newNotesData => ({
  type: ActionTypes.ADD_NOTE,
  text: 'add a new note',
  value: newNotesData,
});

export const updateNote = updatedNoteData => ({
  type: ActionTypes.UPDATE_NOTE,
  text: 'update a note',
  value: updatedNoteData,
});

export const deleteNote = deletedNoteDataId => ({
  type: ActionTypes.DELETE_NOTE,
  text: 'delete a note',
  value: deletedNoteDataId,
});

export const requestNotes = notes => ({
  type: ActionTypes.REQUEST_NOTES,
  notes,
})

export const fetchNotesLoading = notes => ({
  type: ActionTypes.FETCH_NOTES_LOADING,
  notes,
})
