import React, { Component } from 'react';
import assessmentsContainer from '../../containers/assessments-container';

class Assessments extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchAssessments()
  }

  render() {
    return (
      <div>
      Hello
      </div>
    )
  }
}

export default assessmentsContainer(Assessments);
