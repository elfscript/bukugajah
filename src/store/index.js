import { createStore } from 'redux'
import { connect } from 'react-redux'

import rootReducer from '../reducers'
import * as ActionTypes from '../constants'

/*
BELOW IS ONLY FOR PRODUCTION
*/
export const store = createStore(rootReducer);

// BELOW IS FOR DEVELOPMENT
/* export const store = createStore(
    rootReducer,
    initialState,
    compose(
      typeof window === 'object'
      && typeof window.devToolsExtension !== 'undefined' ?
        window.devToolsExtension() : (func) => func
))*/

const mapStateToProps = state => ({
  noteSearchTerm: state.noteSearchTerm,
});

const mapDispatchToProps = dispatch => ({
  setNoteSearchTerm: (noteSearchTerm) => {
    dispatch({
      type: ActionTypes.SET_NOTE_SEARCH_TERM,
      text: 'set search term for notes',
      value: noteSearchTerm
    })
  },
});


export const connector = connect(mapStateToProps, mapDispatchToProps)
