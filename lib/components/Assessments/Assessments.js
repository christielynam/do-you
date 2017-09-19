import React, { Component } from "react";
import fetchContainer from "../../containers/fetch-container";
import Slide from "../Slide/Slide";
import Results from '../Results/Results';
import Loading from '../Loading/Loading';
import { storeTestInfo, handleFetchError, handleFetchLoading } from '../../utils/usersAPI';
import './Assessments.css';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class Assessments extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      loggedIn: true,
    };
    this.manageSlideUpdate = this.manageSlideUpdate.bind(this);
  }

  componentDidMount() {
    const { fetchAssessments, testType, user } = this.props;

    if (!user) {
      this.setState({ loggedIn: false })
    } else {
      fetchAssessments(testType);
    }
  }

  componentWillReceiveProps(nextProps) {
    const objectKeys = Object.keys(nextProps.fetchedAssessment);
    if (objectKeys.length > 0 && this.props.assessmentSlides.length === 0) {
      const { id, deck_id } = nextProps.fetchedAssessment
      const { user } = this.props
      this.props.displayAssessment(id);
      storeTestInfo(id, deck_id, user.id)
    }
  }

  manageSlideUpdate(object, boolean) {
    const { fetchedAssessment } = this.props;
    object.response = boolean;

    this.props.updateSlideResponse(object, fetchedAssessment.id);
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {

    const { fetchHasErred, fetchIsLoading, assessmentSlides } = this.props;

    if (!this.state.loggedIn) {
      return <Redirect to='/login' />
    }

    handleFetchError(fetchHasErred)
    handleFetchLoading(fetchIsLoading)

    let slideToRender = assessmentSlides[this.state.counter];

    if (assessmentSlides.length && slideToRender) {
      return (
        <div className='slide-container'>
          <Slide
            slideData={slideToRender}
            manageSlideUpdate={this.manageSlideUpdate}
          />
        </div>
      );
    }

    if (assessmentSlides.length && slideToRender === undefined) {
      return (
        <div className='completion-container'>
          <h3 className='completion-message'>You have completed your assessment!</h3>
          <Link to='/results' className='results-link'>
            View your results
          </Link>
        </div>
      )
    } else {
      return (
        <div>
          Everything's broken
        </div>
      );
    }
  }
}

export default fetchContainer(Assessments);
