/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import __ErrorAlert from '../common/ErrorAlertComponent/errorAlert';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ErrorAlert', () => {
  it('should render ErrorAlert component', () => {
    const wrapper = shallow(<__ErrorAlert />);
  });

  it('should render initial layout', () => {
    // when
    const component = shallow(<__ErrorAlert />);
    // then
    expect(component.getElements()).toMatchSnapshot();
  });
});
