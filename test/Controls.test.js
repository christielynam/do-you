import React from 'react';
import { shallow, mount } from 'enzyme';
import Controls from '../lib/components/Controls/Controls';

describe('Controls tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Controls />)
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
