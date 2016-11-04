import { combineReducers } from 'redux';

import NoteSearchReducer from './NoteSearchReducer';

const rootReducer = combineReducers({ noteSearchTerm: NoteSearchReducer });

export default rootReducer;
