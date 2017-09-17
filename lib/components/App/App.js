import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Controls from '../Controls/Controls';
import Mission from '../Mission/Mission';
import PersonalityTypes from '../PersonalityTypes/PersonalityTypes';
import Assessments from '../Assessments/Assessments';
import Results from '../Results/Results';
import './App.css';
import { Route } from 'react-router';

const App = () => {
  return(
    <div className='app-container'>
      <Route exact path='/' component={LandingPage} />
       {/* <Header /> */}
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/mission' component={Mission} />
      <Route exact path='/personality-types' component={PersonalityTypes} />
      <Route exact path='/assessments' component={Assessments} />
      <Route exact path='/results' component={Results} />
    </div>
  )
}

export default App;
