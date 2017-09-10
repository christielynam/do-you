import { connect } from 'react-redux';
import Assessments from '../components/Assessments/Assessments';
import { fetchAssessments } from '../actions';

const mapStateToProps = store => {
  return {
    fetchIsLoading: store.isLoading,
    fetchHasErred: store.hasErred
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAssessments: () => dispatch(fetchAssessments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessments);
