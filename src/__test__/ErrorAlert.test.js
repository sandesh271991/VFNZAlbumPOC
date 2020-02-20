/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import ErrorAlert from '../component/ErrorAlert';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';


configure({ adapter: new Adapter() });


describe('MyComponent', () => {
  it('should render my component', () => {
    const wrapper = shallow(<ErrorAlert />);
  });

  it('should render initial layout', () => {
    // when
    const component = shallow(<ErrorAlert />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });
});
