import React from 'react';
import { shallow, mount } from 'enzyme';
import LandingPage from '../lib/components/LandingPage/LandingPage';

describe('LandingPage tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LandingPage />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
