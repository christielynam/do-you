import { connect } from 'react-redux';
import { fetchAssessments, fetchPersonalities, displayAssessment, updateSlideResponse, fetchResults, fetchUserFromDB, addUserToDB, fetchAllTests } from '../actions';
import { push } from 'react-router-redux';

const mapStateToProps = store => {
  return {
    fetchIsLoading: store.isLoading,
    fetchHasErred: store.hasErred,
    fetchedAssessment: store.fetchedAssessment,
    fetchedPersonalities: store.fetchedPersonalities,
    assessmentSlides: store.assessmentSlides,
    assessmentResults: store.assessmentResults,
    user: store.user,
    tests: store.tests
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAssessments: (testType) => dispatch(fetchAssessments(testType)),
    fetchPersonalities: () => dispatch(fetchPersonalities()),
    displayAssessment: testId => dispatch(displayAssessment(testId)),
    updateSlideResponse: (slideObject, testId) => dispatch(updateSlideResponse(slideObject, testId)),
    fetchResults: testId => dispatch(fetchResults(testId)),
    fetchUserFromDB: (email, password) => dispatch(fetchUserFromDB(email, password)),
    addUserToDB: (name, email, password) => dispatch(addUserToDB(name, email, password)),
    fetchAllTests: userId => dispatch(fetchAllTests(userId)),
    changeRoute: url => dispatch(push(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
