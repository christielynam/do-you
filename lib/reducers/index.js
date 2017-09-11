import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { hasErred, isLoading, fetchedAssessment, fetchedPersonalities } from './fetch-reducers';

const rootReducer = combineReducers({
  hasErred,
  isLoading,
  fetchedAssessment,
  fetchedPersonalities,
  routing: routerReducer
})

export default rootReducer;
