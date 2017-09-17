import React from 'react';
import { Link } from 'react-router-dom';
import Lightbulb from '../Lightbulb/Lightbulb';
import './LandingPage.css';

const LandingPage = () => {
  return(
    <div className='landing-page'>
      <section className='hero-section'>
        <header className='landing-header'>
          <h1 className='main-title'>do you.</h1>
          <h3 className='main-tagline'>let your Personality shine.</h3>
        </header>
        <article className='mission-article'>
          <div className='wordcloud-container'>
            <img className='wordcloud-man' src='../../../assets/wordcloud-final.png' alt='wordcloud man' />
          </div>
          <div className='mission-statement'>
            <h6 className='purpose'>Recognizing and understanding your personality type can change the way you see yourself - which in turns affects everything you do and every aspect of your life. Please take any of our personality assessments to help you unlock your potential, find your passion, and DO YOU!</h6>
          </div>
        </article>
      </section>
      <section className='lightbulb-section'>
        <Lightbulb bulbNum={'bulb-one'} route={'/login'} />
        <Lightbulb bulbNum={'bulb-two'} route={'/signup'}/>
        <Lightbulb bulbNum={'bulb-three'} route={'/personality-types'} />
        <Lightbulb bulbNum={'bulb-four'} route={'/assessments'} />
      </section>
    </div>
  )
}

export default LandingPage;
