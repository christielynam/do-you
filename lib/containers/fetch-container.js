import { connect } from 'react-redux';
import { fetchAssessments, fetchPersonalities, displayAssessment, updateSlideResponse, fetchResults, fetchUserFromDB, addUserToDB } from '../actions';

const mapStateToProps = store => {
  return {
    fetchIsLoading: store.isLoading,
    fetchHasErred: store.hasErred,
    fetchedAssessment: store.fetchedAssessment,
    fetchedPersonalities: store.fetchedPersonalities,
    assessmentSlides: store.assessmentSlides,
    assessmentResults: store.assessmentResults,
    user: store.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAssessments: () => dispatch(fetchAssessments()),
    fetchPersonalities: () => dispatch(fetchPersonalities()),
    displayAssessment: testId => dispatch(displayAssessment(testId)),
    updateSlideResponse: (slideObject, testId) => dispatch(updateSlideResponse(slideObject, testId)),
    fetchResults: testId => dispatch(fetchResults(testId)),
    fetchUserFromDB: (email, password) => dispatch(fetchUserFromDB(email, password)),
    addUserToDB: (name, email, password) => dispatch(addUserToDB(name, email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
