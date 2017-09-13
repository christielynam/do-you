import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { hasErred, isLoading, fetchedAssessment, fetchedPersonalities, assessmentSlides, assessmentResults } from './fetch-reducers';
import { user } from './database-reducers';

const rootReducer = combineReducers({
  hasErred,
  isLoading,
  fetchedAssessment,
  fetchedPersonalities,
  assessmentSlides,
  assessmentResults,
  user,
  routing: routerReducer
})

export default rootReducer;
