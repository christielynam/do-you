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
          </article>
          <article className='type planner'>
            <h3>planner.</h3>
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
