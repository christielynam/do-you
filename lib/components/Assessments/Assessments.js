
import React, { Component } from "react";
import fetchContainer from "../../containers/fetch-container";

class Assessments extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchAssessments();
  }

  render() {
    const { fetchHasErred, fetchIsLoading, fetchedAssessment } = this.props;

    console.log('fetched Assessments', fetchedAssessment);

    if (fetchHasErred) {
      return <p>You fucked up</p>;
    }

    if (fetchIsLoading) {
      return <p>Loading...</p>;
    }

    return <div>Hello</div>;
  }
}


export default fetchContainer(Assessments);
