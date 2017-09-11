import React, { Component } from "react";
import fetchContainer from "../../containers/fetch-container";
import Slide from "../Slide/Slide";

class Assessments extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.manageSlideUpdate = this.manageSlideUpdate.bind(this);
  }

  componentDidMount() {
    this.props.fetchAssessments();
  }

  componentWillReceiveProps(nextProps) {
    const objectKeys = Object.keys(nextProps.fetchedAssessment);
    if (objectKeys.length > 0 && this.props.assessmentSlides.length === 0) {
      this.props.displayAssessment(nextProps.fetchedAssessment.id);
    }
  }

  manageSlideUpdate(object, boolean) {

    console.log('slide data', object, boolean)
    // update the response of the slide object in the user's assessment
    // setState to increase counter, this will cause a re-render which will show the next slide
  }

  render() {
    const { fetchHasErred, fetchIsLoading, assessmentSlides } = this.props;

    let slideToRender = assessmentSlides[this.state.counter];

    if (fetchHasErred) {
      return <p>You fucked up</p>;
    }

    if (fetchIsLoading) {
      return <p>Loading...</p>;
    }

    if (assessmentSlides.length > 0) {
      return (
        <div>
          <Slide
            slideData={slideToRender}
            manageSlideUpdate={this.manageSlideUpdate}
          />
        </div>
      );
    } else {
      return <div>SHITTT</div>;
    }
  }
}

export default fetchContainer(Assessments);
