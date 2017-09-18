import React from 'react';
import { shallow, mount } from 'enzyme';
import AssessmentsList from '../lib/components/AssessmentsList/AssessmentsList';

describe('AssessmentsList tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AssessmentsList />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
