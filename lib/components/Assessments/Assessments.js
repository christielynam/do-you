import React, { Component } from "react";
import fetchContainer from "../../containers/fetch-container";

class Assessments extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchAssessments();
  }

  componentWillReceiveProps(nextProps) {
    const objectKeys = Object.keys(nextProps.fetchedAssessment)
    if (objectKeys.length > 0 && this.props.assessmentSlides.length === 0) {
      this.props.displayAssessment(nextProps.fetchedAssessment.id);
    }
  }

  render() {
    const { fetchHasErred, fetchIsLoading, assessmentSlides } = this.props;

    console.log('assessment', assessmentSlides)

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
