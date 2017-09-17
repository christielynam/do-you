import React, { Component } from 'react';
import fetchContainer from "../../containers/fetch-container";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
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

  signInUser(e) {
    e.preventDefault();
    console.log('button clicked')
    const { email, password } = this.state;
    this.props.fetchUserFromDB(email, password);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      this.setState({ loggedIn: true })
    }
  }

  render() {

    if (this.state.loggedIn) {
      return (
        <Redirect to='/' />
      )
    }

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
                   type='password'
                   value={this.state.password}
                   onChange={ e => this.handleChange(e, 'password')}
          />
            <button className='sign-in-btn'
                    disabled={!this.state.email || !this.state.password}
                    onClick={this.signInUser.bind(this)}>
                    Log In
            </button>
          </div>
        <div className='right-container'>
          <h2 className='sign-up-text'>
            Don't Have An Account? <Link className='signup-link' to='/signup'>Sign Up!</Link>
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
