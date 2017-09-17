import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { hasErred, isLoading, fetchedAssessment, fetchedPersonalities, assessmentSlides, assessmentResults } from './fetch-reducers';
import { user, tests } from './database-reducers';

const rootReducer = combineReducers({
  hasErred,
  isLoading,
  fetchedAssessment,
  fetchedPersonalities,
  assessmentSlides,
  assessmentResults,
  user,
  tests,
  routing: routerReducer
})

export default rootReducer;
