import { combineReducers } from 'redux'
import * as ActionTypes from '../constants'

import NoteReducer from './NoteReducer'

const rootReducer = combineReducers({ notes: NoteReducer })

export default rootReducer
