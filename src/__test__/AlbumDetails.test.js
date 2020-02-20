import 'react-native';
import React, { Component } from 'react';
import { shallow } from 'enzyme';
import AlbumDetailsView from '../component/AlbumDetailsView';


describe('Album Details Screen', () => {

  it('should render Album Details component', () => {
      const wrapper = shallow(<AlbumDetailsView />);
  });

  it('should render initial layout', () => {
  // when
  const component = shallow(<AlbumDetailsView />);
  // then
  expect(component.getElements()).toMatchSnapshot();
  });

  it('should check if BackButton exists', () => {
    const wrapper = shallow(<AlbumDetailsView />);
    wrapper.findWhere(n => n.name() === 'Button' && n.prop('testID') === 'HomeButton')

  });

});