import React, { Component } from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import __AlbumDetailsView from '../component/AlbumDetailsComponent/albumDetailsView';

describe('Album Details Screen', () => {

  it('should render Album Details component', () => {
    const wrapper = shallow(
        <__AlbumDetailsView navigation={{ getParam: jest.fn() }} />
    );
  });

  it('should render initial layout', () => {
  // when
  const component = shallow(<__AlbumDetailsView navigation={{ getParam: jest.fn() }} />);
  // then
  expect(component.getElements()).toMatchSnapshot();
  });

  it('should check if BackButton exists', () => {
    const wrapper = shallow(<__AlbumDetailsView navigation={{ getParam: jest.fn() }} />);
    wrapper.findWhere(n => n.name() === 'Button' && n.prop('testID') === 'HomeButton')
  });
  
});