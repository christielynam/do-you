import React, { Component } from 'react';
import './Results.css';
import fetchContainer from '../../containers/fetch-container';

class Results extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchResults(this.props.fetchedAssessment.id);
  }

  render() {
    const { personality_blend, personality_types, career_matches,  } = this.props.assessmentResults;

    return (
      <div>Display results here.</div>
    )
  }
}

export default fetchContainer(Results);
