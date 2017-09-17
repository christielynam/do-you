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

  handleBlendResultsDisplay() {
    const { personality_blend } = this.props
    if (personality_blend !== {}) {
      return (
        <div>
          <h4>{personality_blend.name}</h4>
          <p>{personality_blend.description}</p>
        </div>
      )
    }
  }

  handleCareerResultsDisplay() {
    console.log(this.props.assessmentResults)
  }

  render() {
    const { personality_blend, personality_types, career_matches,  } = this.props.assessmentResults;

    return (
      <div className='outside-container'>
        <div className='results-container'>
          <h2 className='results-title'>your assessment results.</h2>
          <div className='blend-container'>
            { this.handleBlendResultsDisplay() }
          </div>
          <div className='career-container'>
            { this.handleCareerResultsDisplay() }
          </div>
        </div>
      </div>
    )
  }
}

export default fetchContainer(Results);
