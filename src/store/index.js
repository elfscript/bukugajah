import { createStore, compose } from 'redux'
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
  notesData: state.notesData
});

const mapDispatchToProps = dispatch => ({
  setSearchTerm: (notesData) => {
    dispatch({
      type: ActionTypes.SET_SEARCH_TERM,
      text: 'set search term for characters',
      value: notesData
    })
  },
});


export const connector = connect(mapStateToProps, mapDispatchToProps)
