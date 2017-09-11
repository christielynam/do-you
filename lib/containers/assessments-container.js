import { connect } from 'react-redux';
import { fetchAssessments } from '../actions';

const mapStateToProps = store => {
  return {
    fetchIsLoading: store.isLoading,
    fetchHasErred: store.hasErred,
    fetchedData: store.fetchedData,
    fetchedPersonalities: store.fetchedPersonalities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAssessments: () => dispatch(fetchAssessments()),
    fetchPersonalities: () => dispatch(fetchPersonalities())
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
