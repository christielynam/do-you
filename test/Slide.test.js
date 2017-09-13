import React from 'react';
import { shallow, mount } from 'enzyme';
import Slide from '../lib/components/Slide/Slide';

describe('Slide tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Slide />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
