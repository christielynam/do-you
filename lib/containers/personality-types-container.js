import { connect } from 'react-redux';
import PersonalityTypes from '../components/PersonalityTypes/PersonalityTypes';
import { fetchPersonalities } from '../actions';

const mapStateToProps = store => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPersonalities: () => dispatch(fetchPersonalities())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalityTypes);
