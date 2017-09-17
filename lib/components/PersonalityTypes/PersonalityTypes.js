import React, { Component } from "react";
import "./PersonalityTypes.css";
import fetchContainer from "../../containers/fetch-container";
import PersonalityTypeContainer from "../PersonalityTypeContainer/PersonalityTypeContainer";

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
    if (personalitiesArray.length > 0) {
      return personalitiesArray.map( object => <PersonalityTypeContainer key={object.id} { ...object } /> )
    }
  }

  render() {
    const { fetchHasErred, fetchIsLoading } = this.props;

    if (fetchHasErred) {
      return <p>You fucked up</p>;
    }

    if (fetchIsLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="background-container">
        <div className="personality-container">
          <h2 className="personality-title">personality types.</h2>
          {this.handleTypesDisplay()}
        </div>
      </div>
    );
  }
}

export default fetchContainer(PersonalityTypes);
