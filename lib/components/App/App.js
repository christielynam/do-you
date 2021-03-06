import React from 'react';
import Assessments from '../Assessments/Assessments';
import AssessmentsList from '../AssessmentsList/AssessmentsList';
import Controls from '../Controls/Controls';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import PersonalityTypes from '../PersonalityTypes/PersonalityTypes';
import Profile from '../Profile/Profile';
import Signup from '../Signup/Signup';
import Results from '../Results/Results';
import './App.css';
import { Switch, Route } from 'react-router';

const App = () => {
  return(
    <div className='app-container'>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/' component={Header} />
      </Switch>

      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/controls' component={Controls} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/personality-types' component={PersonalityTypes} />
      <Route exact path='/assessments' component={AssessmentsList} />
      <Route exact path='/assessments/core' render={() => <Assessments testType={"core"} />} />
      <Route exact path='/assessments/career' render={() => <Assessments testType={"career-deck"} />} />
      <Route exact path='/assessments/intro-extro' render={() => <Assessments testType={"introvert-extrovert"} />} />
      <Route exact path='/assessments/heroes' render={() => <Assessments testType={"super-hero"} />} />
      <Route exact path='/assessments/movies' render={() => <Assessments testType={"movies"} />} />
      <Route exact path='/assessments/persuasion' render={() => <Assessments testType={"persuasion"} />} />
      <Route exact path='/results' component={Results} />
    </div>
  )
}

export default App;
