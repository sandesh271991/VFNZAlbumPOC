import 'react-native';
import React, { Component } from 'react';
import { shallow } from 'enzyme';
import AlbumDetailsView from '../component/AlbumDetailsView';

describe('Album Details Screen', () => {

  it('should render Album Details component', () => {
    const wrapper = shallow(
        <AlbumDetailsView navigation={{ getParam: jest.fn() }} />
    );
  });

  it('should render initial layout', () => {
  // when
  const component = shallow(<AlbumDetailsView navigation={{ getParam: jest.fn() }} />);
  // then
  expect(component.getElements()).toMatchSnapshot();
  });

  it('should check if BackButton exists', () => {
    const wrapper = shallow(<AlbumDetailsView navigation={{ getParam: jest.fn() }} />);
    wrapper.findWhere(n => n.name() === 'Button' && n.prop('testID') === 'HomeButton')
  });
});