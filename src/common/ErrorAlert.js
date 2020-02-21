/* eslint-disable no-unused-vars */
import { View } from 'react-native';
import {  Text } from 'react-native-paper';
import React from 'react';
import styles from '../style/ErrorAlert.component.style';


export default class ErrorAlert extends React.Component {
    render() {

      return (
          <React.Fragment>

              <View style={styles.alertMainContainer}>
                  <View style={styles.alertView}>
                    <Text style={styles.alertHeading}>Something went wrong</Text>
                    <Text style={styles.alertMessage}>Please check network connectivity</Text>
                  </View>
              </View>
        
          </React.Fragment>
      );
    }
}
