import React from 'react';
import { shallow, mount } from 'enzyme';
import PersonalityTypes from '../lib/components/PersonalityTypes/PersonalityTypes';
import fetchContainer from "../lib/containers/fetch-container";
import fetchMock from 'fetch-mock';

describe('PersonalityTypes tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<fetchContainer />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
