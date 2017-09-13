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
    const { assessmentResults } = this.props;

    // const personalityBlend = assessmentResults.personality_blend.map

    return (
      <div>Hello</div>
    )
  }
}

export default fetchContainer(Results);
