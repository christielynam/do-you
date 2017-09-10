import React, { Component } from 'react';

export default class Assessments extends Component {
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
