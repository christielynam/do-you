import React from 'react';
import { shallow, mount } from 'enzyme';
import ResultsIntroExtro from '../lib/components/ResultsIntroExtro/ResultsIntroExtro';

describe('ResultsIntroExtro tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultsIntroExtro />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
