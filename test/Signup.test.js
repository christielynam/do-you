import React from 'react';
import { shallow, mount } from 'enzyme';
import Signup from '../lib/components/Signup/Signup';

describe('Signup tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Signup />)
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
