import React from 'react';
import { Link } from 'react-router-dom';
import fetchContainer from '../../containers/fetch-container';
import './Controls.css';

const Controls = ({ user }) => {
  console.log(user)
  const userName = user ? `${user.name.toUpperCase()}` : 'user'
  return(
    <div className='controls-container'>
      <div className='welcome-container'>
        <h2 className='welcome-msg'>Welcome, {userName}!</h2>

          <Link className='sign-out-link' to='/'><button className='sign-out-btn' onClick={() => localStorage.removeItem('user')}>
            Sign Out
          </button>
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
