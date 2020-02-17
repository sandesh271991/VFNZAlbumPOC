import { View, Image } from 'react-native';
import { Button, Provider, Text } from 'react-native-paper';
import React from 'react';
import styles from '../style/DetailView.component.style';

export default class DetailView extends React.Component {
    static navigationOptions = {
      title: 'Album Detail',
    };

    render() {
      { /* Using the navigation prop we can get the value passed from the previous screen */ }
      const { navigation } = this.props;
      const albumID = navigation.getParam('albumID', 'some default value');

      return (
          <React.Fragment>
              <View style={styles.mainContainer}>
                <View style={styles.albumViewContainer}>
                    <Text style={styles.textStyle}>{albumID}</Text>
                    <Button mode="contained"
                        onPress={() => this.props.navigation.goBack()}
                        style={styles.buttonStyle}>
                        Go back
                    </Button>
                </View>
              </View>
          </React.Fragment>
      );
    }
}
