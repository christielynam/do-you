import React from 'react';
import './PersonalityTypes.css';

const PersonalityTypes = () => {
  return (
    <div className='outer-container'>
      <div className='types-container'>
        <h2 className='personality-title'>personality types.</h2>
        <div className='first-row'>
          <article className='type hover-instructions'>
            <h3>hover over each personality type to learn a little more...</h3>
          </article>
          <article className='type analyzer'>
            <h3>analyzer.</h3>
            <p className='hover-text'>Analyzers... are inquisitive. They delve, study and look deeply for information. They have a keen eye and an experimental nature. Analyzers use these capacities to figure out problems and search for the facts, often in a laboratory environment. They excel at going beyond the surface toward uncovering information and discovery.</p>
          </article>
          <article className='type planner'>
            <h3>planner.</h3>
            <p className='hover-text'>Planners... are the detail people. They are methodical, precise, and detail-oriented. Planners create systems to follow, and enjoy working with data, detail, words and numbers. Great at manipulating data, they love procedure and routine. Often found in office settings, they excel at completing detailed work in an organized manner.</p>
          </article>
          <article className='type mentor'>
            <h3>mentor.</h3>
          </article>
        </div>
        <div className='second-row'>
          <article className='type visionary'>
            <h3>visionary.</h3>
          </article>
          <article className='type action-taker'>
            <h3>action-taker.</h3>
          </article>
          <article className='type inventor'>
            <h3>inventor.</h3>
          </article>
          <article className='type naturalist'>
            <h3>naturalist.</h3>
          </article>
        </div>
      </div>
    </div>
  )
}

export default PersonalityTypes;
