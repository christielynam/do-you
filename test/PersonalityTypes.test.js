import React from 'react';
import { shallow, mount } from 'enzyme';
import PersonalityTypes from '../lib/components/PersonalityTypes/PersonalityTypes';

describe('PersonalityTypes tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PersonalityTypes />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
