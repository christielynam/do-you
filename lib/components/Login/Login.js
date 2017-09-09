import React, {Component} from 'react';
import './Login.css'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }
  render() {
    return(
      <div className='login-container'>
        <div className='input-container'>
          <div className='left-container'>
            <h2 className='login-text'>Login To Your Account</h2>
            <input className='email-input'
            placeholder='email address'
            autoFocus />
            <input className='password-input'
            placeholder='password' />
            <button className='sign-in-btn'>Sign In</button>
          </div>
        <div className='right-container'>
          <h2 className='sign-up-text'>Don't Have An Account? Sign Up!</h2>
          <button className='facebook-btn'>Sign In With Facebook</button>
          <button className='twitter-btn'>Sign In With Twitter</button>
          <button className='google-btn'>Sign In With Google+</button>
        </div>
      </div>
    </div>
    )
  }

}
