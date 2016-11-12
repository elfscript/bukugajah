import { combineReducers } from 'redux';

import NotesReducer       from './NotesReducer';
import NoteSearchReducer  from './NoteSearchReducer';

const rootReducer = combineReducers({ notesData: NotesReducer, noteSearchTerm: NoteSearchReducer });

export default rootReducer;
