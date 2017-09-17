import React from 'react';
import { Link } from 'react-router-dom';
import fetchContainer from '../../containers/fetch-container';
import './Controls.css';

const Controls = (props) => {

  return(
    <div className='controls-container'>
      <div className='welcome-container'>
        {/* <img className='wordcloud-controls' src='../../../assets/wordcloud-final.png' alt='personality word cloud' /> */}
        <h2 className='welcome-msg'>Welcome, {`${props.user.name.toUpperCase()}`}!</h2>
        <Link className='sign-out-btn' to='/'>
          Sign Out
        </Link>
      </div>
      <div className='controls-links'>
        <Link to='/profile'
              className='profile-page'>
              my profile.
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

export default fetchContainer(Controls);
