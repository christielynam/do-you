import { connect } from 'react-redux';
import { fetchAssessments, fetchPersonalities, displayAssessment, updateSlideResponse } from '../actions';

const mapStateToProps = store => {
  return {
    fetchIsLoading: store.isLoading,
    fetchHasErred: store.hasErred,
    fetchedAssessment: store.fetchedAssessment,
    fetchedPersonalities: store.fetchedPersonalities,
    assessmentSlides: store.assessmentSlides
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAssessments: () => dispatch(fetchAssessments()),
    fetchPersonalities: () => dispatch(fetchPersonalities()),
    displayAssessment: testId => dispatch(displayAssessment(testId)),
    updateSlideResponse: (slideObject, testId) => dispatch(updateSlideResponse(slideObject, testId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
