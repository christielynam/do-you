import React, { Component } from 'react';
import Loading from '../Loading/Loading';
import fetchContainer from '../../containers/fetch-container';
import './Profile.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      testsArray: [],
    }
    this.handleRecentTest = this.handleRecentTest.bind(this);
  }

  componentDidMount() {
    const { fetchAllTests, user } = this.props;
    fetchAllTests(user.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tests) {
      this.setState({ testsArray: nextProps.tests });
    }
  }

  recentAssessments() {
    const { testsArray } = this.state;
    if (testsArray.length) {
      return testsArray.map( test => {
        return (
          <button className='test-btn'
                  key={ test.id } 
                  onClick={ () => this.handleRecentTest(test) }>
            <p>Type: { test.deck_id }</p>
            <p>Created at: { test.created_at.split('T')[0] } </p>
          </button>
        )
      })
    }
  }

  handleRecentTest(test) {
    console.log('test', test)
  }

  render() {
    const { fetchHasErred, fetchIsLoading } = this.props;

    if (fetchHasErred) {
      return <p>You fucked up</p>;
    }

    if (fetchIsLoading) {
      return <Loading />
    }

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
