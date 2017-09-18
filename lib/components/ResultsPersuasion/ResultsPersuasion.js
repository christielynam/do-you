import React from 'react';
import './ResultsPersuasion.css';

const ResultsPersuasion = ({ personality_types }) => {

  const persuasionMatches = personality_types.map( type => {
    const { name, description, badge, keywords } = type.personality_type
    return (
      <div className='personality-card'>
        <img src={ badge.image_small } alt="personality-icon"/>
        <h4>{ name }</h4>
        <p>{ description }</p>
        <p>Key Traits: { keywords }</p>
        <h6>Match Score: { type.score }</h6>
      </div>
    )
  })

  return (
    <div className='persuasion-type'>
      <h2>Persuasion Personality Types</h2>
      <div className='persuasion-matches'>
        { persuasionMatches }
      </div>
    </div>
  )
}

export default ResultsPersuasion;
