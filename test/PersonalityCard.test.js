import React from 'react';
import { shallow, mount } from 'enzyme';
import PersonalityCard from '../lib/components/PersonalityCard/PersonalityCard';

describe('PersonalityCard tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PersonalityCard />)
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
