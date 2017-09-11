import React, { Component } from 'react';
import './PersonalityTypes.css';
import fetchContainer from "../../containers/fetch-container";

class PersonalityTypes extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchPersonalities();
  }

  render() {
    const { fetchHasErred, fetchIsLoading, fetchedPersonalities } = this.props;

    console.log('fetched Personalities', fetchedPersonalities);

    if (fetchHasErred) {
      return <p>You fucked up</p>;
    }

    if (fetchIsLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className='outer-container'>
        <div className='types-container'>
          <h2 className='personality-title'>personality types.</h2>
        </div>
      </div>
    )

  }
}

export default fetchContainer(PersonalityTypes);
