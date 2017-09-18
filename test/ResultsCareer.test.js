import React from 'react';
import { shallow, mount } from 'enzyme';
import ResultsCareer from '../lib/components/ResultsCareer/ResultsCareer';

describe('ResultsCareer tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultsCareer />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
