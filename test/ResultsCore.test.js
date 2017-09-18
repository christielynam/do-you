import React from 'react';
import { shallow, mount } from 'enzyme';
import ResultsCore from '../lib/components/ResultsCore/ResultsCore';

describe('ResultsCore tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultsCore />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
