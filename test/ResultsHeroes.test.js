import React from 'react';
import { shallow, mount } from 'enzyme';
import ResultsHeroes from '../lib/components/ResultsHeroes/ResultsHeroes';

describe('ResultsHeroes tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultsHeroes />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
