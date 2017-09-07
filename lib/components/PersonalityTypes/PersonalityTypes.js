import React, { Component } from 'react';

export class PersonalityTypes extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchPersonalities()
  }

  render() {
    <div>
      Hello
    </div>
  }
}
