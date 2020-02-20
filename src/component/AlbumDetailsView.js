import { View, Image } from 'react-native';
import { Button, Provider, Text } from 'react-native-paper';
import React from 'react';
import styles from '../style/AlbumDetailView.component.style';


export default class DetailView extends React.Component {
    static navigationOptions = {
      title: 'Album Detail',
    };

    render() {
      { /* Using the navigation prop we can get the value passed from the previous screen */ }
      const { navigation } = this.props;
      const albumTitle = navigation.getParam('albumTitle', 'Default data');
      const albumImg = navigation.getParam('albumImg', 'some default value');
      const goBackToHome = () => this.props.navigation.goBack(this.props.navigation.state.key);


      return (
          <React.Fragment>
            <Provider>
              <View style={styles.mainContainer}>
                <View style={styles.albumViewContainer}>
                    <Image source = {{ uri: albumImg }} style={styles.imageView} />
                    <Text style={styles.textStyle}>{albumTitle}</Text>
                    <Button mode="contained"
                        onPress={() => this.props.navigation.navigate('HomeScreen', { goBackToHome, })}
                        style={styles.buttonStyle}>
                        HOME
                    </Button>
                </View>
              </View>
            </Provider>
          </React.Fragment>
      );
    }
}
