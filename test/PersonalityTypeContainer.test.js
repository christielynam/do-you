import React from 'react';
import { shallow, mount } from 'enzyme';
import PersonalityTypeContainer from '../lib/components/PersonalityTypeContainer/PersonalityTypeContainer';

describe('PersonalityTypeContainer tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PersonalityTypeContainer />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
