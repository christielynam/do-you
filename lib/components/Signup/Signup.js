import React, { Component } from 'react';
import './Signup.css';

export default class Signup extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  handleChange(e, type) {
    this.setState({
      [type]: e.target.value
    })
  }

  render() {
    const { name, email, password, confirmPassword } = this.state

    return(
      <section className='signup-container'>
        <form className='create-user-form'>
          <h3 className='create-account-heading'>
              Create New Account
          </h3>
          <input className='newuser-name'
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
                 type='text'
                 placeholder='password'
                 value={password}
                 onChange={(e) => this.handleChange(e, 'password')}
          />
          <input className='newuser-password confirm-password'
                 type='text'
                 placeholder='confirm password' value={confirmPassword}
                 onChange={(e) => this.handleChange(e, 'confirmPassword')}
          />
          <button className='signup-btn'
                  type='submit'
                  disabled={!this.state.name || !this.state.email || !this.state.password || !this.state.confirmPassword}
                  >
                  Sign Up
          </button>

        </form>
      </section>
    )
  }
}
