import React from 'react';
import { shallow, mount } from 'enzyme';
import Assessments from '../lib/components/Assessments/Assessments';
import fetchContainer from "../lib/containers/fetch-container";
import fetchMock from 'fetch-mock';

describe('Assessments tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Assessments />)
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
