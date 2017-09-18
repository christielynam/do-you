import React from 'react';
import { shallow, mount } from 'enzyme';
import ResultsMovies from '../lib/components/ResultsMovies/ResultsMovies';

describe('ResultsMovies tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultsMovies />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
