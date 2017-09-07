import React from 'react';
import { Link } from 'react-router-dom';

const Controls = () => {
  return(
    <div>
      <img src='../../../assets/wordcloud-final.png' alt='personality word cloud' />
      <Link to='/login'
            className='login-page'>
            login.
      </Link>
      <Link to='/mission'
            className='mission-page'>
            our mission.
      </Link>
      <Link to='/personality-types'
            className='personality-types-page'>
            personality types.
      </Link>
      <Link to='/assessments'
            className='assessments-page'>
            assessments.
      </Link>
    </div>
  )
}

export default Controls;
