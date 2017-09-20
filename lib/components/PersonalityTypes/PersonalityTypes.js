import React, { Component } from "react";
import "./PersonalityTypes.css";
import fetchContainer from "../../containers/fetch-container";
import PersonalityTypeContainer from "../PersonalityTypeContainer/PersonalityTypeContainer";
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

class PersonalityTypes extends Component {
  constructor() {
    super();
    this.state = {
      personalitiesArray: []
    };
  }

  componentDidMount() {
    this.props.fetchPersonalities();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetchedPersonalities.length > 0) {
      this.setState({ personalitiesArray: nextProps.fetchedPersonalities });
    }
  }

  handleTypesDisplay() {
    const { personalitiesArray } = this.state;
    if (personalitiesArray.length) {
      return personalitiesArray.map( object => <PersonalityTypeContainer key={object.id} { ...object } /> )
    }
  }

  handleFetchStatus() {
    const { fetchHasErred, fetchIsLoading } = this.props;
    fetchIsLoading ? <Loading /> : false
    fetchHasErred ? <Error /> : false
  }

  render() {
    this.handleFetchStatus()

    return (
      <div className='background-container'>
        <div className='personality-container'>
          <h2 className='personality-title'>
            personality types.
          </h2>
          {this.handleTypesDisplay()}
        </div>
      </div>
    );
  }
}

export default fetchContainer(PersonalityTypes);
