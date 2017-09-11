
import React, { Component } from "react";
import assessmentsContainer from "../../containers/assessments-container";

class Assessments extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchAssessments();
  }

  render() {
    const { fetchHasErred, fetchIsLoading, fetchedData } = this.props;

    console.log('fetched Data', fetchedData)

    if (fetchHasErred) {
      return <p>You fucked up</p>;
    }

    if (fetchIsLoading) {
      return <p>Loading...</p>;
    }

    return <div>Hello</div>;
  }
}

export default assessmentsContainer(Assessments);

