import React from 'react';
import { shallow, mount } from 'enzyme';
import Profile from '../lib/components/Profile/Profile';

describe('Profile tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Profile />)
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
