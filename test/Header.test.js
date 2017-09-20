import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../lib/components/Header/Header';

describe('Header tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it.skip('should exist', () => {

    expect(wrapper).toBeDefined()
  })

  it.skip('should render an h1 tag', () => {
    const title = wrapper.find('.app-title')

    expect(title.text()).toEqual('do you.');
  })

  it.skip('should render an h3 tag', () => {
    const tagline = wrapper.find('.app-tagline')

    expect(tagline.text()).toEqual('let your Personality shine.');
  })

})
