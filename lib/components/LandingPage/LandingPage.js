import React from 'react';
import { Link } from 'react-router-dom';
import fetchContainer from '../../containers/fetch-container';
import Lightbulb from '../Lightbulb/Lightbulb';
import './LandingPage.css';
import { Redirect } from 'react-router';
const jwt = require('jwt-simple');
const secret = 'xxx';

const loggedIn = () => {
  const token = window.location.href.split('=')[1];
  return token ? token : false
}

const LandingPage = (props) => {
  console.log(props)
  const user = loggedIn()

  if (user) {
    const userObj = jwt.decode(user, secret, true)
    props.storeUser([userObj])
    return(
      <Redirect to='/controls' />
    )
  }

  return(

    <div className='landing-page'>
      <section className='hero-section'>
        <header className='landing-header'>
          <h1 className='main-title'>do you.</h1>
          <h3 className='main-tagline'>let your Personality shine.</h3>
        </header>
        <article className='mission-article'>
          <div className='wordcloud-container'>
            <img className='wordcloud-man' src='../../../assets/wordcloud_man.png' alt='wordcloud man' />
          </div>
          <div className='mission-statement'>
            <h6 className='purpose'>Recognizing and understanding your personality type can change the way you see yourself - which in turns affects everything you do and every aspect of your life. Please take any of our personality assessments to help you unlock your potential, find your passion, and DO YOU!</h6>
          </div>
        </article>
      </section>
      <section className='lightbulb-section'>
        <Lightbulb bulbNum={'bulb-one'} text={'sign up'} route={'/signup'} />
        <Lightbulb bulbNum={'bulb-two'} text={'personalities'} route={'/personality-types'}/>
        <Lightbulb bulbNum={'bulb-three'} text={'login'} route={'/login'} />
        <Lightbulb bulbNum={'bulb-four'} text={'assessments'} route={'/assessments'} />
      </section>
    </div>
  )
}

export default fetchContainer(LandingPage);
