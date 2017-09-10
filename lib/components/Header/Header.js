import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return(
    <div className='header'>
      <div className='header-text'>
        <Link to='/'
              className='home-page'>
              <h1 className='app-title'>do you.</h1>
        </Link>
        <h3 className='app-tagline'>let your Personality shine.</h3>
      </div>
      <div className='lightbulb-container'>
        <img className='lightbulbs' src='../../../assets/no-back.png' alt='hanging lightbulb logo' />
      </div>
    </div>
  )
}

export default Header;
