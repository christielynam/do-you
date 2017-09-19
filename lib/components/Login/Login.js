import React, { Component } from 'react';
import fetchContainer from "../../containers/fetch-container";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Controls from '../Controls/Controls'
import './Login.css'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loggedIn: false
    }
  }

  handleChange(e, type) {
    this.setState({
      [type]: e.target.value
    })
  }

  updateLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  signInUser(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.fetchUserFromDB(email, password);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      this.setState({ loggedIn: true })
      this.updateLocalStorage(nextProps.user)
    }
  }

  render() {

    if (this.state.loggedIn) {
      return (
        <Redirect to='/controls' />
      )
    }

    return(
      <div className='login-container'>
        <div className='input-container'>
          <form
            className='left-container'
            onSubmit={this.signInUser.bind(this)}
          >
            <h2 className='login-text'>
              Login To Your Account
            </h2>
            <input
              className='email-input'
              type='email'
              placeholder='email address'
              autoFocus
              value={this.state.email}
              onChange={ e => this.handleChange(e, 'email')}
            />
            <input
              className='password-input'
              placeholder='password'
              type='password'
              value={this.state.password}
              onChange={ e => this.handleChange(e, 'password')}
            />
            <input
              className='sign-in-btn'
              type='submit'
              value='Log in'
              disabled={!this.state.email || !this.state.password}
            />
          </form>
        <div className='right-container'>
          <h2 className='sign-up-text'>
            Don't Have An Account?
            <Link className='signup-link'
              to='/signup'>
              Sign Up!
            </Link>
          </h2>
          <button className='facebook-btn'>
            Log In With Facebook
          </button>
          <button className='twitter-btn'>
            Log In With Twitter
          </button>
          <button className='google-btn'>
            Log In With Google+
          </button>
        </div>
      </div>
    </div>
    )
  }
}

export default fetchContainer(Login);
