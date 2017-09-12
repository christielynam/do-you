import React, { Component } from 'react';
import { fetchUserFromDB } from '../../utils/usersAPI';
import './Login.css'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange(e, type) {
    this.setState({
      [type]: e.target.value
    })
  }

  signInUser(e) {
    e.preventDefault();
    const { email, password } = this.state;
    return fetchUserFromDB(email, password)
  }

  render() {
    return(
      <div className='login-container'>
        <div className='input-container'>
          <div className='left-container'>
            <h2 className='login-text'>
              Login To Your Account
            </h2>
            <input className='email-input'
                   placeholder='email address'
                   autoFocus
                   value={this.state.email}
                   onChange={ e => this.handleChange(e, 'email')}
          />
            <input className='password-input'
                   placeholder='password'
                   value={this.state.password}
                   onChange={ e => this.handleChange(e, 'password')}
          />
            <button className='sign-in-btn'
                    disabled={!this.state.email || !this.state.password}
                    onClick={this.signInUser.bind(this)}>
                    Sign In
            </button>
          </div>
        <div className='right-container'>
          <h2 className='sign-up-text'>
            Don't Have An Account? Sign Up!
          </h2>
          <button className='facebook-btn'>
            Sign In With Facebook
          </button>
          <button className='twitter-btn'>
            Sign In With Twitter
          </button>
          <button className='google-btn'>
            Sign In With Google+
          </button>
        </div>
      </div>
    </div>
    )
  }

}
