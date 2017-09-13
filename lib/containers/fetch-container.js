import { connect } from 'react-redux';
import { fetchAssessments, fetchPersonalities, displayAssessment, updateSlideResponse, fetchResults } from '../actions';

const mapStateToProps = store => {
  return {
    fetchIsLoading: store.isLoading,
    fetchHasErred: store.hasErred,
    fetchedAssessment: store.fetchedAssessment,
    fetchedPersonalities: store.fetchedPersonalities,
    assessmentSlides: store.assessmentSlides,
    assessmentResults: store.assessmentResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAssessments: () => dispatch(fetchAssessments()),
    fetchPersonalities: () => dispatch(fetchPersonalities()),
    displayAssessment: testId => dispatch(displayAssessment(testId)),
    updateSlideResponse: (slideObject, testId) => dispatch(updateSlideResponse(slideObject, testId)),
    fetchResults: testId => dispatch(fetchResults(testId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
