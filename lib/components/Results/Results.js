import React, { Component } from 'react';
import './Results.css';
import fetchContainer from '../../containers/fetch-container';

class Results extends Component {
  constructor() {
    super();
    this.state = {
      deckId: '',
    }
  }

  componentDidMount() {
    this.props.fetchResults(this.props.fetchedAssessment.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.assessmentResults !== null) {
      this.setState({ deckId: nextProps.assessmentResults.deck_id })
    }
  }

  handleBlendResultsDisplay() {
    const { deckId } = this.state

    switch (deckId) {
      case 'introvert-extrovert':
        return <ResultsIntroExtro />
      case 'career-deck' :
        return <ResultsCareer />
      case 'core':
        return <ResultsCore />
      case 'heroes':
        return <ResultsHeroes />
      case 'persuasion':
        return <ResultsPersuasion />
      default:
        return <h4>No results available.</h4>
    }
  }

  render() {

    return (
      <div className='outside-container'>
        <div className='inside-container'>
          <h2 className='results-title'>your assessment results.</h2>
          <div className='results-container'>
            { this.handleResultsDisplay() }
          </div>
        </div>
      </div>
    )
  }
}

export default fetchContainer(Results);
