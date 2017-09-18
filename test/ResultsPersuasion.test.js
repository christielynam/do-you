import React from 'react';
import { shallow, mount } from 'enzyme';
import ResultsPersuasion from '../lib/components/ResultsPersuasion/ResultsPersuasion';

describe('ResultsPersuasion tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultsPersuasion />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
