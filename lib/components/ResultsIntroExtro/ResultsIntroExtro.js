import React from 'react';

const ResultsIntroExtro = ({ personality_types }) => {

  const introExtroDisplay = personality_types.map( object => {
    return (
      <div className='intro-extro-type'>
        <div className='main-info'>
          <img src={ object.personality_type.badge.image_small } alt="badge-image"/>
          <h4>{ object.personality_type.name }</h4>
          <p>{ object.personality_type.description }</p>
          <p>Score: { object.score }</p>
        </div>
        <div className='extra-info'>
          <h4>{ object.personality_type.details[0].title}</h4>
          <p>{ object.personality_type.details[0].body}</p>
          <p>Keywords: { object.personality_type.keywords}</p>
        </div>
      </div>
    )
  })

  return (
    <div className='intro-extro-container'>
      { introExtroDisplay }
    </div>
  )
}

export default ResultsIntroExtro;
