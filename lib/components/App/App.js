import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Controls from '../Controls/Controls';
import Mission from '../Mission/Mission';
import PersonalityTypes from '../PersonalityTypes/PersonalityTypes';
import Assessments from '../Assessments/Assessments';
import './App.css';

import { Route } from 'react-router';

const App = () => {
  return(
    <div className='app-container'>
      <Header />
      <Route exact path='/' component={Controls} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/mission' component={Mission} />
      <Route exact path='/personality-types' component={PersonalityTypes} />
      <Route exact path='/assessments' component={Assessments} />
    </div>
  )
}

export default App;
