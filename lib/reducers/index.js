import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { hasErred, isLoading, fetchedAssessment, fetchedPersonalities, assessmentSlides } from './fetch-reducers';

const rootReducer = combineReducers({
  hasErred,
  isLoading,
  fetchedAssessment,
  fetchedPersonalities,
  assessmentSlides,
  routing: routerReducer
})

export default rootReducer;
