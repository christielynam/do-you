import React from 'react';
import { shallow, mount } from 'enzyme';
import Assessments from '../lib/components/Assessments/Assessments';
import fetchMock from 'fetch-mock';

describe('Assessments tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
  
})
