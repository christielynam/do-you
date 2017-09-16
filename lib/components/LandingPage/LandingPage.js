import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return(
    <div className='landing-page'>
      <header className='lightbulb-header'>
        <img className='lightbulb-image' src='../../../assets/no-back.png' alt='lightbulbs' />
        <h3 className='shine-tagline'>let your Personality shine.</h3>
      </header>
      <main className='main-container'>
        <div className='main-left'>
          <h1 className='main-title'>do you.</h1>
          <h6 className='purpose-statement'>Recognizing and understanding your personality type can change the way you see yourself - which in turns affects everything you do and every aspect of your life. Please take our Core and/or Career Personality assessments to help you unlock your potential and find your passion.</h6>
        </div>
        <div className='main-right'>
          <img className='wordcloud-man' src='../../../assets/wordcloud-final.png' alt='wordcloud man' />
        </div>
      </main>
    </div>
  )
}

export default LandingPage;
