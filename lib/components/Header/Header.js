import React from 'react';
import './Header.css'

const Header = () => {
  return(
    <div className='header'>
      <div className='header-text'>
        <h1 className='app-title'>do you.</h1>
        <h4 className='app-tagline'>where Personality meets Passion.</h4>
      </div>
      <div className='lightbulb-container'>
        <img className='lightbulbs' src='../../../assets/no-back.png' alt='hanging lightbulb logo' />
      </div>
    </div>
  )
}

export default Header;
