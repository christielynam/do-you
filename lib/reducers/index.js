import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { fetchHasErred, fetchIsLoading } from './fetch-reducers'

const rootReducer = combineReducers({
  fetchHasErred,
  fetchIsLoading,
  routing: routerReducer
})

export default rootReducer
