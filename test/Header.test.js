import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Header from '../lib/components/Header/Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should exist', () => {

    expect(wrapper).toBeDefined()
  })

  it('should render an h1 tag', () => {
    const title = wrapper.find('.app-title')

    expect(title.text()).toEqual('do you.');
  })

  it('should render an h3 tag', () => {
    const tagline = wrapper.find('.app-tagline')

    expect(tagline.text()).toEqual('let your Personality shine.');
  })

})
