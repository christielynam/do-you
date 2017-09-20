import React, { Component } from "react";
import fetchContainer from "../../containers/fetch-container";
import Loading from '../Loading/Loading';
import Results from '../Results/Results';
import Slide from "../Slide/Slide";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { storeTestInfo, handleFetchError, handleFetchLoading } from '../../utils/usersAPI';
import './Assessments.css';

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

    !user ? this.setState({ loggedIn: false }) : false

    !this.props.assessmentSlides.length ?  fetchAssessments(testType) : false
  }

  componentWillReceiveProps(nextProps) {
    const objectKeys = Object.keys(nextProps.fetchedAssessment);

    if (objectKeys.length && this.props.assessmentSlides.length === 0) {
      const { id, deck_id } = nextProps.fetchedAssessment
      const { user, displayAssessment } = this.props
      displayAssessment(id);
      storeTestInfo(id, deck_id, user.id)
    }
  }

  manageSlideUpdate(object, boolean) {
    const { fetchedAssessment, updateSlideResponse } = this.props;
    object.response = boolean;

    updateSlideResponse(object, fetchedAssessment.id);
    this.setState({ counter: this.state.counter + 1 });
  }

  handleSlideDisplay(slideToRender) {
    const { assessmentSlides } = this.props;
    if (assessmentSlides.length) {
      return slideToRender ?
          <Slide
            slideData={slideToRender}
            manageSlideUpdate={this.manageSlideUpdate}
          />
      :
      <div className='completion-container'>
        <h3 className='completion-message'>You have completed your assessment!</h3>
        <Link to='/results' className='results-link'>
          View your results
        </Link>
      </div>
    } else {
      return (
        <div>
          Everything's broken
        </div>
      );
    }
  }

  render() {
    const { fetchHasErred, fetchIsLoading, assessmentSlides } = this.props;
    const slideToRender = assessmentSlides[this.state.counter];

    if (!this.state.loggedIn) {
      return <Redirect to='/login' />
    }

    handleFetchError(fetchHasErred)
    handleFetchLoading(fetchIsLoading)

    return (
      <div className='slide-container'>
        { this.handleSlideDisplay(slideToRender) }
      </div>
    )
  }
}

export default fetchContainer(Assessments);
