import React from 'react';
import { Link } from 'react-router-dom';
import './Controls.css';

const Controls = () => {
  return(
    <div className='controls-container'>
      <div className='image-container'>
        <img src='../../../assets/wordcloud-final.png' alt='personality word cloud' />
      </div>
      <div className='controls-links'>
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
              personalities.
        </Link>
        <Link to='/assessments'
              className='assessments-page'>
              assessments.
        </Link>
      </div>
    </div>
  )
}

export default Controls;
