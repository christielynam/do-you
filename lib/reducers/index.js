import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { hasErred, isLoading, fetchedData } from './fetch-reducers';

const rootReducer = combineReducers({
  hasErred,
  isLoading,
  fetchedData,
  routing: routerReducer
})

export default rootReducer;
