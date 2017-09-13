import React from 'react';
import { shallow, mount } from 'enzyme';
import Mission from '../lib/components/Mission/Mission';

describe('Mission tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Mission />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
