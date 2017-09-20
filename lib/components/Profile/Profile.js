import React, { Component } from 'react';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import fetchContainer from '../../containers/fetch-container';
import { Redirect } from 'react-router';
import './Profile.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      testsArray: [],
      testComplete: ''
    }
    this.handleRecentTest = this.handleRecentTest.bind(this);
  }

  componentDidMount() {
    const { fetchAllTests, user } = this.props;
    fetchAllTests(user.id);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.tests ?
      this.setState({ testsArray: nextProps.tests }) : false

    nextProps.assessmentResults ?
      this.setState({ testComplete: 'complete' }) : false

    nextProps.assessmentSlides.length ?
      this.setState({ testComplete: 'incomplete' }) : false
  }

  recentAssessments() {
    const { testsArray } = this.state;
    if (testsArray.length) {
      return testsArray.map( test => {
        return (
          <button
            className='test-btn'
            key={ test.id }
            onClick={ () => this.handleRecentTest(test) }>
            <p className='test-type'>{ test.deck_id }</p>
            <p>{ test.created_at.split('T')[0] }</p>
          </button>
        )
      })
    }
  }

  handleRecentTest(test) {
    this.props.fetchResults(test.test_id);
  }

  handleFetchStatus() {
    const { fetchHasErred, fetchIsLoading } = this.props;
    fetchIsLoading ? <Loading /> : false
    fetchHasErred ? <Error /> : false
  }

  render() {
    const { fetchHasErred, fetchIsLoading } = this.props;

    switch (this.state.testComplete) {
      case 'complete':
        return <Redirect to='/results' />

      case 'incomplete':
        return <Redirect to='/assessments/core' />

      default:
        break
    }

    this.handleFetchStatus();

    return (
      <div className='background-container'>
        <div className='profile-container'>
          <h1>your recent assessments.</h1>
          <div className='tests-container'>
            { this.recentAssessments() }
          </div>
        </div>
      </div>
    )
  }
}

 export default fetchContainer(Profile);
