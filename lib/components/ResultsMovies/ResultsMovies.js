import React from 'react';

const ResultsMovies = ({ personality_blend, personality_types }) => {

  const personalityMatches = personality_types.map( type => {
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
    <div className='movies-type'>
      <div className='blend'>
        <h2>Personality Blend</h2>
        <div className='blend-images'>
          <img src={ personality_blend.personality_type_1.badge.image_small } alt="badge-image"/>
          <img src={ personality_blend.personality_type_2.badge.image_small } alt="badge-image"/>
        </div>
        <div className='blend-text'>
          <h4>{ personality_blend.name }</h4>
          <p>{ personality_blend.description }</p>
        </div>
      </div>
      <div className="personality-matches">
        <h2>Your personality</h2>
        { personalityMatches }
      </div>
    </div>
  )
}

export default ResultsMovies;
