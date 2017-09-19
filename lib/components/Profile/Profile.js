import React, { Component } from 'react';
import Loading from '../Loading/Loading';
import fetchContainer from '../../containers/fetch-container';
import { handleFetchError, handleFetchLoading } from '../../utils/usersAPI';
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
    this.setState({
      testComplete: ''
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tests) {
      this.setState({ testsArray: nextProps.tests });
    }

    if (nextProps.assessmentResults) {
      const completed = nextProps.assessmentResults.completed_at ? 'complete' : 'incomplete'
      this.setState({ testComplete: completed })
    }
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
            <p>Type: { test.deck_id }</p>
            <p>Created on: { test.created_at.split('T')[0] }</p>
          </button>
        )
      })
    }
  }

  handleRecentTest(test) {
    this.props.fetchResults(test.test_id);
  }

  render() {
    const { fetchHasErred, fetchIsLoading } = this.props;

    switch (this.state.testComplete) {
      case 'complete':
        return <Redirect to='/results' />

      case 'incomplete':
        return <Redirect to='/assessments' />

      default:
        break
    }

    handleFetchError(fetchHasErred)
    handleFetchLoading(fetchIsLoading)

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
