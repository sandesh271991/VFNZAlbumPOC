// import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ThumbnailView from './src/component/ThumbnailView';
import HomeScreen from './src/component/Home';
import AlbumDetailsView from './src/component/AlbumDetailsView';


const MainNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  ThumbnailViewScreen: { screen: ThumbnailView },
  AlbumDetailsViewScreen: { screen: AlbumDetailsView },
},
{
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#0c82f3',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const NavigationApp = createAppContainer(MainNavigator);
export default NavigationApp;

// Styling
// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({

  MainContainer: {
    padding: 0,
  },

  detailNavArrow: {
    width: 30,
    minWidth: 30,
    fontSize: 30,
    marginLeft: 30,
  },

});
