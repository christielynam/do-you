import React, { Component } from 'react';
import fetchContainer from "../../containers/fetch-container";
import { Redirect } from 'react-router';
import './Signup.css';

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      loggedIn: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== {}) {
      this.setState({ loggedIn: true })
    }
  }

  handleChange(e, type) {
    this.setState({
      [type]: e.target.value
    })
  }

  handleSubmit(e) {
    const { name, email, password } = this.state
    e.preventDefault();
    this.props.addUserToDB(name, email, password)
  }

  render() {
    const { name, email, password, confirmPassword, loggedIn } = this.state

    if (loggedIn) {
      return (
        <Redirect to='/' />
      )
    }

    return(
      <section className='container'>
        <div className='signup-container'>
          <form className='create-user-form' onSubmit={ (e) => this.handleSubmit(e) }>
              <h3 className='create-account-heading'>
                Create New Account
              </h3>
            <input
               className='newuser-name'
               type='text'
               placeholder='name'
               autoFocus value={name}
                   onChange={(e) => this.handleChange(e, 'name')}
            />
            <input className='newuser-email'
                   type='text'
                   placeholder='email'
                   value={email}
                   onChange={(e) => this.handleChange(e, 'email')}
            />
            <input className='newuser-password'
                   type='password'
                   placeholder='password'
                   value={password}
                   onChange={(e) => this.handleChange(e, 'password')}
            />
            <input className='newuser-password confirm-password'
                   type='password'
                   placeholder='confirm password' value={confirmPassword}
                   onChange={(e) => this.handleChange(e, 'confirmPassword')}
            />
            <button
              className='signup-btn'
              type='submit'
                    // value='Sign Up'
              disabled={!this.state.name || !this.state.email || !this.state.password || !this.state.confirmPassword}>
              Sign Up
            </button>

          </form>
        <div className='social-media-container'>
          <h3 className='social-media-heading'>
            Sign Up thru Social Media
          </h3>
          <button className='facebook-btn'>
            Sign Up With Facebook
          </button>
          <button className='twitter-btn'>
            Sign Up With Twitter
          </button>
          <button className='google-btn'>
            Sign Up With Google+
          </button>
        </div>
        </div>
      </section>
    )
  }
}

export default fetchContainer(Signup);
