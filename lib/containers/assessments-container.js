import { connect } from 'react-redux';
import { fetchAssessments } from '../actions';

const mapStateToProps = store => {
  return {
    fetchIsLoading: store.isLoading,
    fetchHasErred: store.hasErred,
    fetchedData: store.fetchedData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAssessments: () => dispatch(fetchAssessments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
