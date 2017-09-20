import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from '../lib/components/Login/Login';

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />)
  })

  it.skip('should exist', () => {

    expect(wrapper).toBeDefined()
  })

  it.skip('should have a default state', () => {

    expect(wrapper.state()).toEqual({ email: '', password: '' })
  })


  it.skip('can change state', () => {
    const emailInput = wrapper.find('.email-input')
    const passwordInput = wrapper.find('.password-input')

    emailInput.simulate('change', {target: {value: 'christielynam@gmail.com'}})

    passwordInput.simulate('change', {target: {value: 'auburn'}})

    expect(wrapper.state()).toEqual({ email: 'christielynam@gmail.com', password: 'auburn' })

  })

})
