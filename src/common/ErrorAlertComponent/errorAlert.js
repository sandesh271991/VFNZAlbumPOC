/* eslint-disable no-unused-vars */
import React from 'react';
import { View } from 'react-native';
import {  Text } from 'react-native-paper';
import styles from '../../common/ErrorAlertComponent/style';


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
