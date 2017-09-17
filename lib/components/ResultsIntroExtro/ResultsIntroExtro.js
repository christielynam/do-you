import React from 'react';
import './ResultsIntroExtro.css';

const ResultsIntroExtro = ({ personality_types }) => {

  const introExtroDisplay = personality_types.map( object => {
    return (
      <div className='intro-extro-type'>
        <div className='main-info'>
          <div className='title-container'>
            <img src={ object.personality_type.badge.image_small } alt="badge-image"/>
            <h4>{ object.personality_type.name }</h4>
          </div>
          <p>{ object.personality_type.description }</p>
          <h4 className='score-info'>Score: { object.score }</h4>
        </div>
        <div className='extra-info'>
          <h4>{ object.personality_type.details[0].title}</h4>
          <p>{ object.personality_type.details[0].body}</p>
          <p><span className='keywords'>Keywords:</span> { object.personality_type.keywords}</p>
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
