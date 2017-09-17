import React from 'react';

const ResultsCareer = ({ personality_blend, personality_types, career_matches}) => {

  const complementConflict = personality_blend.details.map( object => {
    return (
      <div className='complement-conflict'>
        <h6>{ object.title }</h6>
        <p>{ object.body }</p>
      </div>
    )
  })

  const careerMatches = career_matches.map( career => {
    const { title, picture, description } = career.career
    return (
      <div className='career-card'>
        <img src={ picture } alt="career-image"/>
        <h4>{ title }</h4>
        <p>{ description }</p>
        <h6>Match Score: { career.score }</h6>
      </div>
    )
  })


  return (
    <div className='career-type'>
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
        <div className='blend-extra-info'>
          { complementConflict }
        </div>
      </div>
      <div className='career-matches'>
        <h2>Career Matches</h2>
        { careerMatches }
      </div>
    </div>
  )
}

export default ResultsCareer;
