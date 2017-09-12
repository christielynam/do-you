import React, { Component } from "react";
import "./PersonalityTypes.css";
import fetchContainer from "../../containers/fetch-container";
import PersonalityCard from "../PersonalityCard/PersonalityCard";

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

  render() {
    const { fetchHasErred, fetchIsLoading } = this.props;

    if (fetchHasErred) {
      return <p>You fucked up</p>;
    }

    if (fetchIsLoading) {
      return <p>Loading...</p>;
    }

    const displayCareerTypes = () => {
      if (this.state.personalitiesArray.length > 0) {
        return this.state.personalitiesArray[0].badges.map(object => (
          <PersonalityCard key={object.personality_type} {...object} />
        ));
      }
    };

    return (
      <div className="background-container">
        <div className="types-container">
          <h2 className="personality-title">personality types.</h2>
          <div className="grid-container">{displayCareerTypes()}</div>
        </div>
      </div>
    );
  }
}

export default fetchContainer(PersonalityTypes);

// <article className="type hover-instructions">
//   <h3>
//     hover over each personality type to learn a little more...
//   </h3>
// </article>
