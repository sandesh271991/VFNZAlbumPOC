import React, { Component } from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import __ThumbnailView from '../component/ThumbnailComponent/thumbnailView';
 


describe('ToDoList component', () => {
  describe('when rendered', () => {
    // it('should fetch a list of tasks', () => {
    //   const getSpy = jest.spyOn(axios, 'get');
    //   const toDoListInstance = shallow(
    //     <__ThumbnailView/>
    //   );
    //   expect(getSpy).toBeCalled();
    // });

    it('should render Thumbnail View component', () => {
        const wrapper = shallow(<__ThumbnailView navigation={{ getParam: jest.fn() }} />);
      });
    
      it('should render initial layout', () => {
        jest.useFakeTimers()
        // when
        const component = shallow(<__ThumbnailView  navigation={{ getParam: jest.fn() }}/>);
        // then
        expect(component.getElements()).toMatchSnapshot();
      });

  });
});